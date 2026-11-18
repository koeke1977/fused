const galleries = document.querySelectorAll<HTMLElement>("[data-project-gallery]");
galleries.forEach((gallery) => {
  const dialog = gallery.querySelector<HTMLDialogElement>("[data-project-lightbox]");
  const imageElement = dialog?.querySelector<HTMLImageElement>("[data-gallery-image]");
  const caption = dialog?.querySelector<HTMLElement>("[data-gallery-caption]");
  const count = dialog?.querySelector<HTMLElement>("[data-gallery-count]");
  const close = dialog?.querySelector<HTMLButtonElement>("[data-gallery-close]");
  const previous = dialog?.querySelector<HTMLButtonElement>("[data-gallery-prev]");
  const next = dialog?.querySelector<HTMLButtonElement>("[data-gallery-next]");
  const triggers = Array.from(gallery.querySelectorAll<HTMLButtonElement>("[data-gallery-open]"));
  if (!dialog || !imageElement || !caption || !count || !close) return;
  const images = triggers.map((trigger) => {
    const img = trigger.querySelector("img");
    return { src: img?.currentSrc || img?.src || "", alt: img?.alt || "" };
  });
  let active = 0;
  let lastTrigger: HTMLButtonElement | null = null;
  const show = (index: number) => {
    active = (index + images.length) % images.length;
    imageElement.src = images[active].src;
    imageElement.alt = images[active].alt;
    caption.textContent = images[active].alt;
    count.textContent = `${active + 1} / ${images.length}`;
    if (previous) previous.hidden = images.length < 2;
    if (next) next.hidden = images.length < 2;
  };
  triggers.forEach((trigger, index) => trigger.addEventListener("click", () => {
    lastTrigger = trigger;
    show(index);
    dialog.showModal();
    close.focus();
  }));
  close.addEventListener("click", () => dialog.close());
  previous?.addEventListener("click", () => show(active - 1));
  next?.addEventListener("click", () => show(active + 1));
  dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener("close", () => { imageElement.removeAttribute("src"); lastTrigger?.focus(); });
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && images.length > 1) { event.preventDefault(); show(active - 1); }
    if (event.key === "ArrowRight" && images.length > 1) { event.preventDefault(); show(active + 1); }
  });
});
