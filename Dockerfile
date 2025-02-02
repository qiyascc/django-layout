FROM python:3.10-slim-buster as base

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    POETRY_VERSION=1.8.2 \
    POETRY_VIRTUALENVS_CREATE=false \
    POETRY_HOME="/opt/poetry" \
    PATH="$POETRY_HOME/bin:$PATH"

WORKDIR /app

RUN apt-get update \
    && apt-get install -y --no-install-recommends build-essential curl \
    && curl -sSL https://install.python-poetry.org | python3 - \
    && rm -rf /var/lib/apt/lists/*

COPY pyproject.toml poetry.lock ./

RUN poetry install --no-dev --no-interaction --no-ansi

COPY . .

RUN poetry run python manage.py collectstatic --noinput

CMD ["poetry", "run", "gunicorn", "project_name.wsgi:application", "--bind", "0.0.0.0:8000"]

EXPOSE 8000
