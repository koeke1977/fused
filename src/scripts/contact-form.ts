const MAX_FILES = 5;
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "application/pdf"]);

function formatFileSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function initialiseContactForm(): void {
  const upload = document.querySelector<HTMLElement>("[data-file-upload]");
  const input = upload?.querySelector<HTMLInputElement>("#contact-files");
  const list = upload?.querySelector<HTMLUListElement>("[data-file-list]");
  const error = upload?.querySelector<HTMLElement>("[data-file-error]");
  if (!upload || !input || !list || !error) return;

  let selectedFiles: File[] = [];

  const renderFiles = (): void => {
    list.replaceChildren();
    selectedFiles.forEach((file, index) => {
      const item = document.createElement("li");
      item.className = "file-upload-item";

      const details = document.createElement("span");
      details.className = "file-upload-details";
      details.textContent = `${file.name} · ${formatFileSize(file.size)}`;

      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "file-upload-remove";
      remove.textContent = "Verwijderen";
      remove.setAttribute("aria-label", `Verwijder ${file.name}`);
      remove.addEventListener("click", () => {
        selectedFiles = selectedFiles.filter((_, fileIndex) => fileIndex !== index);
        syncInput();
        renderFiles();
      });

      item.append(details, remove);
      list.append(item);
    });
  };

  const syncInput = (): void => {
    const transfer = new DataTransfer();
    selectedFiles.forEach((file) => transfer.items.add(file));
    input.files = transfer.files;
  };

  const showError = (message: string): void => {
    error.textContent = message;
    error.hidden = !message;
  };

  const addFiles = (files: FileList | File[]): void => {
    const incoming = Array.from(files);
    const next = [...selectedFiles];

    for (const file of incoming) {
      if (!ALLOWED_TYPES.has(file.type)) {
        showError("Dit bestandstype wordt niet ondersteund. Kies JPG, PNG, WEBP of PDF.");
        continue;
      }
      if (file.size > MAX_FILE_SIZE) {
        showError(`“${file.name}” is groter dan 10 MB en werd niet toegevoegd.`);
        continue;
      }
      if (next.some((existing) => existing.name === file.name && existing.size === file.size && existing.lastModified === file.lastModified)) {
        continue;
      }
      if (next.length >= MAX_FILES) {
        showError("Je kunt maximaal 5 bestanden toevoegen.");
        break;
      }
      next.push(file);
    }

    selectedFiles = next;
    syncInput();
    renderFiles();
  };

  input.addEventListener("change", () => {
    addFiles(input.files ?? []);
    showError("");
  });

  upload.addEventListener("dragover", (event) => {
    event.preventDefault();
    upload.classList.add("is-dragging");
  });

  upload.addEventListener("dragleave", (event) => {
    if (!upload.contains(event.relatedTarget as Node | null)) upload.classList.remove("is-dragging");
  });

  upload.addEventListener("drop", (event) => {
    event.preventDefault();
    upload.classList.remove("is-dragging");
    if (event.dataTransfer?.files) addFiles(event.dataTransfer.files);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialiseContactForm, { once: true });
} else {
  initialiseContactForm();
}
