export async function copyText(text: string): Promise<boolean> {
  try {
    if (window.navigator.clipboard) {
      await window.navigator.clipboard.writeText(text);
      return true;
    }

    const input = document.createElement("input");
    input.value = text;
    input.style.position = "fixed";
    input.style.top = "0px";
    input.style.zIndex = "100000";
    document.body.appendChild(input);
    input.getBoundingClientRect();
    input.select();

    return Promise.resolve(document.execCommand("copy")).finally(() => {
      input.remove();
    });
  } catch (err) {
    console.error(err);
    return false;
  }
}
