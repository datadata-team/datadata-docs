export const REGION: "cn" | "global" | "dev" = "cn";

export const DATADATA_API_TOKEN = {
  dev: "",
  cn: "4eca924e75873b3aa27905f681db108a.04e22cadb6742e20bfe2d7f010407f9457efcc1bd5533886acdffe60331ae1c19b827b20aed2dd7459027ee378636d03ac4a3b68e64a8ed3688dfdf2a4b26cbbd068be1ebc8e142b906836696bf404ee",
  global:
    "4eca924e75873b3aa27905f681db108a.04e22cadb6742e20bfe2d7f010407f9457efcc1bd5533886acdffe60331ae1c19b827b20aed2dd7459027ee378636d03ac4a3b68e64a8ed3688dfdf2a4b26cbbd068be1ebc8e142b906836696bf404ee",
}[REGION];

export const DATADATA_WEB_COMPONENTS_URL = {
  dev: "",
  cn: "https://www.datadata.cn/web-components/embedded-editor/index.mjs",
  global: "https://www.datadata.com/web-components/embedded-editor/index.mjs",
}[REGION];

export const DATADATA_BASE_URL = { dev: "", cn: "https://www.datadata.cn", global: "https://www.datadata.com" }[REGION];
