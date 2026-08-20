# Fletcher Tattoos

Standalone Fletcher Tattoos artist-book site, extracted from Needle Lounge. The live experience is served at `/` and includes the cover-sized intro, artist book, tabs, scrapbook layouts and enquiry modal.

## Enquiry relay

The form uses the server-only Google Apps Script relay at `/api/tattoo-enquiry`. Set `AFTATTOOS_APPS_SCRIPT_SECRET` privately in the host environment and use the same value for the Apps Script `INBOUND_SECRET` property. See `docs/APPS_SCRIPT_ENQUIRY_SETUP.md` for the attachment-capable Apps Script replacement.
