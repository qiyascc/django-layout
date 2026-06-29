import os
import sys
from {{ project_name }}.config import config

def main():
    settings_module = "{{ project_name }}.settings.dev" if config.debug else "{{ project_name }}.settings.prod"


    os.environ.setdefault("DJANGO_SETTINGS_MODULE", settings_module)

    os.environ.setdefault('DJANGO_SECRET_KEY', config.secret_key)

    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment (e.g. 'poetry shell')?"
        ) from exc
    execute_from_command_line(sys.argv)

if __name__ == "__main__":
    main()
