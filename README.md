# Django Layout

This repository provides a pre-configured Django project layout designed for rapid development and production-ready setups. It includes a well-organized directory structure, essential configurations, and useful tools to kickstart your Django projects.

## Features

- **Pre-configured Settings**: Separate settings for development and production environments.
- **Error Pages**: Custom 404, 500, and 502 error pages with interactive animations.
- **Database Routing**: Built-in support for multiple databases with a custom router.
- **Jazzmin Admin**: A modern and customizable admin interface.
- **Static and Media Files**: Pre-configured static and media file handling.
- **Poetry Integration**: Manage dependencies and virtual environments with Poetry.

## Installation

### Prerequisites

- Python 3.10 or higher
- Poetry (for dependency management)

### Setting Up the Project

1. **Install Poetry** (if not already installed):

   ```bash
   pip install poetry
   ```

2. **Create a New Django Project Using This Layout**:

   ```bash
   django-admin startproject \
     --template=https://github.com/qiyascc/django-layout/zipball/main \
     --extension=py,md,gitignore,yaml,json,toml \
     --exclude=.github \
     YOUR_PROJECT_NAME
   ```

3. **Navigate to Your Project Directory**:

   ```bash
   cd YOUR_PROJECT_NAME
   ```

4. **Activate the Virtual Environment**:

   ```bash
   poetry shell
   ```

5. **Install Dependencies**:

   ```bash
   poetry install
   ```

6. **Run Migrations**:

   ```bash
   python manage.py migrate
   ```

7. **Start the Development Server**:

   ```bash
   python manage.py runserver
   ```

## Project Structure

```
django-layout/
├── README.md
├── LICENSE
├── pyproject.toml
└── project_name/
    ├── manage.py
    ├── client/
    │   └── description.txt
    ├── databases/
    │   └── core/
    │       └── description.txt
    └── project_name/
        ├── __init__.py
        ├── asgi.py
        ├── config.py
        ├── routers.py
        ├── urls.py
        ├── wsgi.py
        ├── apps/
        │   └── __init__.py
        ├── settings/
        │   ├── __init__.py
        │   ├── base.py
        │   ├── dev.py
        │   └── prod.py
        ├── static/
        │   ├── error/
        │   │   ├── script.js
        │   │   └── styles.css
        │   └── logo/
        └── templates/
            ├── 404.html
            ├── 500.html
            ├── 502.html
            └── error/
                └── base.html
```

## Configuration

### Environment Variables

- `DJANGO_SECRET_KEY`: Set your secret key for Django.
- `DJANGO_SETTINGS_MODULE`: Automatically set to `project_name.settings.dev` or `project_name.settings.prod` based on the `debug` flag in the configuration.

### Settings

- **Development Settings**: Located in `project_name/settings/dev.py`.
- **Production Settings**: Located in `project_name/settings/prod.py`.

### Custom Configuration

You can add custom configurations in `project_name/config.py`. This file uses `goodconf` for managing settings with environment variables.

## Running the Project

### Development

To run the project in development mode, ensure the `debug` flag is set to `True` in the configuration. The development server can be started with:

```bash
python manage.py runserver
```

### Production

For production, set the `debug` flag to `False` and configure the necessary production settings in `project_name/settings/prod.py`. You can use `gunicorn` to serve the application:

```bash
gunicorn project_name.wsgi:application
```

## Error Pages

Custom error pages are provided for 404, 500, and 502 errors. These pages include interactive animations and can be customized in the `templates/` directory.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.

## License

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for more details.

---
## Contact
- [Telegram](https://t.me/qiyascc)
