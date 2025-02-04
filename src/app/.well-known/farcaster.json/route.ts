import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header: "eyJmaWQiOjM2MjEsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHhmMjQ0ZGQzYzQyNDgxOWU3NzMxN2UxNTdiNTFlMWQ0ZDNhYzM3MjZjNjY2N2FlOTM3YWU4Y2VhYzkwYmVmNTBlIn0=",
      payload: "eyJkb21haW4iOiJsZWFvbG1vc2V0aC1jaXRpemVuLWFsZXJ0LnZlcmNlbC5hcHAiLCJ0aW1lc3RhbXAiOjE3Mzg3MDkyOTMsImV4cGlyYXRpb25UaW1lIjoxNzQ2NDg1MjkzfQ==",
      signature: "0xa1a44199bd45e87b9b6ef3404b466f6ee5e461642fd58d8fd3957b9eaafbd33334fccef66777afc9fac399b33ed47bf9a37bbeabb6ea037c3d9c5fee43377dd81c"
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
