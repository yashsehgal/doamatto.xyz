# Personal Site

This utilises:
- **Hugo** for page compilation,
- **Vercel/Zeit Now** for hosting, and:
- **GitHub Actions** for linting and code quality.

### Building

When building, ensure you use the following command:
```sh
hugo -D --i18n-warnings
```

When testing, ensure you use the following command:
```sh
hugo server -v -w --i18n-warnings
```

### Testing and CI/CD Utilities
The following tools are installed for testing purposes:
> - SCSS Linting,
> - HTML linting,
> - Markdown linting, and:
> - a General Hugo build test.

These are deployed in two ways: (1) as GitHub actions for CI/CD purposes, and (2) as a Gulp script.

You can either run `gulp` to lint everything, error check, and build, or use one of the tasks (which you can see by running `gulp --tasks`) to compile certain assets

### Acknowledgments

This codebase is licensed under the BSD 3-Clause license. The contents of the website, unless mentioned otherwise, are licensed under the CC-BY-4.0 license.