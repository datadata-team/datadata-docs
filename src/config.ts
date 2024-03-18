export const REGION: "cn" | "global" = "cn";

export const DATADATA_API_TOKEN = {
  cn: "4eca924e75873b3aa27905f681db108a.0a43e525f70c337f8ba8efc5beaddd1511f99805f6eb05a09b74a65bc9fd212deb786a43ff685c2ee2b259e025fcba9d27ed95d8d0a1b755963f24ec274db817fc3c0361a46b0b8b79faf22ada84d161",
  global:
    "4eca924e75873b3aa27905f681db108a.04e22cadb6742e20bfe2d7f010407f9457efcc1bd5533886acdffe60331ae1c19b827b20aed2dd7459027ee378636d03ac4a3b68e64a8ed3688dfdf2a4b26cbbd068be1ebc8e142b906836696bf404ee",
}[REGION];

export const DATADATA_WEB_COMPONENTS_URL = {
  cn: "https://www.datadata.cn/web-components/embedded-editor/index.mjs",
  global: "https://www.datadata.com/web-components/embedded-editor/index.mjs",
}[REGION];

export const DATADATA_BASE_URL = {
  cn: "https://www.datadata.cn",
  global: "https://www.datadata.com",
}[REGION];
