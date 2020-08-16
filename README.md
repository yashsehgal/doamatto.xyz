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

### Acknowledgments

This codebase is licensed under the BSD 3-Clause license. The contents of the website, unless mentioned otherwise, are licensed under the CC-BY-4.0 license.