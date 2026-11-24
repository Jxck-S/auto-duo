# Auto Duo

<img src="public/images/auto-duo.svg" width="96" alt="Auto Duo logo">

An independent browser extension for responding to Duo login requests. Auto Duo is a fork of [Auto-2FA](https://github.com/FreshSupaSulley/Auto-2FA) by Erich Boschert, with a refreshed interface and branding. It is not affiliated with or endorsed by Duo or Cisco.

> [!WARNING]
> The upstream project is archived. Auto Duo relies on unofficial Duo behavior and may not work with newer Duo versions, device attestation, or your organization's policies. Use only where permitted; keep an official authentication method available.

## Install in Chrome

Requirements: [Node.js and npm](https://nodejs.org/) and Git.

1. Clone the fork and build the extension:
   ```sh
   git clone https://github.com/Jxck-S/auto-duo.git
   cd auto-duo
   npm ci
   npm run build
   ```
2. Open `chrome://extensions` in Chrome and turn on **Developer mode**.
3. Select **Load unpacked** and choose the `.output/chrome-mv3` folder inside `auto-duo`.
4. Pin Auto Duo from Chrome's Extensions menu, then open it to add a device.

After updating the source, run `npm ci` and `npm run build` again, then reload the extension on `chrome://extensions`.

## Set up and use

Open your organization's Duo device manager, choose to add a device, and follow the extension's instructions. For screenshots, alternative activation steps, login modes, and troubleshooting, see the [setup walkthrough](TUTORIAL.md). When logging in, select the device created by Auto Duo under **Other options** if Duo sends the request to another device.

For zero-click verified pushes, Auto Duo reads the verification code from the Duo prompt and waits for it before approving. If it cannot find the code, use the extension's manual approval screen. Support depends on Duo's page and API remaining compatible.

## Security and privacy

Auto Duo is less secure than using a separate phone: device credentials are stored in browser extension storage and may be synced with your browser account. Exports contain sensitive credentials and are not encrypted; never share them. Automatic or one-click approval can approve an unintended request. Automatically reading a verified-push code also removes the independent verification that code is intended to provide. Select the two-click setting to review every login, protect your browser profile, and consider disabling extension data sync.

Device registration and login requests communicate with Duo's servers. Review your organization's rules before using this extension.

## Development

Built with [WXT](https://wxt.dev). Run `npm run dev` for development or `npm run build` for a Chrome production build. Firefox builds are available via `npm run build:firefox`, but compatibility is not guaranteed.

## License and credits

Auto Duo includes the original Auto-2FA code by Erich Boschert and is distributed under the [MIT License](LICENSE). Thanks to the upstream contributors and related projects credited by [Auto-2FA](https://github.com/FreshSupaSulley/Auto-2FA).
