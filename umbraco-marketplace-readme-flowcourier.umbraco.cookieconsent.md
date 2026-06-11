# Flowcourier Cookie Consent

Flowcourier Cookie Consent is a self-hosted Umbraco package for implementing cookie consent and Google Consent Mode v2.

## When to use this package

Use this package when you need:

- Consent handling for analytics tracking tools such as Google Analytics, Matomo, or Adobe Analytics
- Umbraco-integrated cookie consent configuration in backoffice
- Google Consent Mode v2 support for common implementation scenarios
- Dictionary-managed labels and translations
- A self-hosted runtime with no mandatory external CMP dependency

## When a commercial CMP may still be required

You may still need a commercial CMP if your site runs Google Ads banners and you need the extra ad-focused CMP workflows around that.

## What is included

- Auto integration mode (middleware injection)
- Manual integration mode (developer-controlled for custom codes and headless sites)
- Category and script management in Umbraco backoffice
- Basic consent statistics endpoint and dashboard

## Installation

```bash
dotnet add package Flowcourier.Umbraco.CookieConsent
```

After installation, configure settings in:

- Settings -> Cookie Consent

## Technical notes

- Targets Umbraco 17+
- Targets .NET 10+
- Wraps [orestbida/cookieconsent](https://github.com/orestbida/cookieconsent) (MIT License)

## Links

- Documentation: https://github.com/flowcourier/Flowcourier.Umbraco.CookieConsent/blob/main/docs/v1/07-integration-guide.md
- Issue tracker: https://github.com/flowcourier/Flowcourier.Umbraco.CookieConsent/issues
