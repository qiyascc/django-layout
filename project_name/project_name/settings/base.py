"""
Django settings for {{ project_name }} project.

Generated by 'django-admin startproject' using Django {{ django_version }}.

For more information on this file, see
https://docs.djangoproject.com/en/{{ docs_version }}/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/{{ docs_version }}/ref/settings/
"""

from pathlib import Path
import os
#-------------------------------#


BASE_DIR = Path(__file__).resolve().parent.parent.parent  # !! 3x .parent
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'fallback-secret-key')


################################# 
#--------------APPS-------------#
#################################
LOCAL_APPS = [
    
]

THIRD_PART_APPS = [
    'rest_framework', # for REST API
    'django_alive', # for Monitoring
]

INSTALLED_APPS = [
    'jazzmin', # Third Part APP, but admin
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
] + THIRD_PART_APPS + LOCAL_APPS




#-------------------------------#
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]


#-------------------------------#
ROOT_URLCONF = '{{ project_name }}.urls'
WSGI_APPLICATION = '{{ project_name }}.wsgi.application'
#-------------------------------#



################################# 
#-----------Databases-----------#
#################################
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'databases/core/admin.sqlite3',
    },
    'apps': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'databases/core/apps.sqlite3',
    }
}

DATABASE_ROUTERS = ['{{ project_name }}.routers.CoreRouter']


#-------------------------------#
AUTH_PASSWORD_VALIDATORS = [...]
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True
STATIC_URL = 'static/'
STATIC_ROOT = 'statics/'
STATICFILES_DIRS = [
    BASE_DIR / "{{ project_name }}/static",
]
MEDIA_URL = 'media/'
MEDIA_ROOT = 'media/'
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

################################# 
#------------TEMPLATES----------#
#################################
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / '{{ project_name }}/templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

################################# 
#-----JAZZMIN Admin Settings----#
#################################
JAZZMIN_SETTINGS = {
    "site_title": "",

    "site_header": "{{ project_name }}",

    "site_brand": "{{ project_name }}",

    "site_logo": "logo/cc.jpg",

    "login_logo": "logo/cc.jpg",

    "login_logo_dark": "logo/cc.jpg",

    "site_logo_classes": "img-circle",

    "site_icon": "logo/cc.jpg",

    "welcome_sign": "Welcome to the {{ project_name }} Dashboard",

    "copyright": "CC from Qiyas",

    "search_model": ["auth.User", "auth.Group"],

    "user_avatar": None,

    ############
    # Top Menu #
    ############
    "topmenu_links": [

        {"name": "Home",  "url": "admin:index", "permissions": ["auth.view_user"]},

        {"name": "Support", "url": "https://github.com/qiyascc/django-layout", "new_window": True},

        {"model": "auth.User"},

    ],

    #############
    # User Menu #
    #############
    "usermenu_links": [
        {"name": "Support", "url": "https://github.com/qiyascc/django-layout", "new_window": True},
        {"model": "auth.user"}
    ],

    #############
    # Side Menu #
    #############
    "show_sidebar": True,

    "navigation_expanded": True,

    "hide_apps": [],

    "hide_models": [],

    "order_with_respect_to": ["auth",],

    "custom_links": {},

    # Custom icons for side menu apps/models See https://fontawesome.com/icons?d=gallery&m=free&v=5.0.0,5.0.1,5.0.10,5.0.11,5.0.12,5.0.13,5.0.2,5.0.3,5.0.4,5.0.5,5.0.6,5.0.7,5.0.8,5.0.9,5.1.0,5.1.1,5.2.0,5.3.0,5.3.1,5.4.0,5.4.1,5.4.2,5.13.0,5.12.0,5.11.2,5.11.1,5.10.0,5.9.0,5.8.2,5.8.1,5.7.2,5.7.1,5.7.0,5.6.3,5.5.0,5.4.2
    # for the full list of 5.13.0 free icon classes
    "icons": {
        "auth": "fas fa-users-cog",
        "auth.user": "fas fa-user",
        "auth.Group": "fas fa-users",
    },
    "default_icon_parents": "fas fa-chevron-circle-right",
    "default_icon_children": "fas fa-circle",

    #################
    # Related Modal #
    #################
    "related_modal_active": False,

    #############
    # UI Tweaks #
    #############
    "custom_css": None,
    "custom_js": None,
    "use_google_fonts_cdn": True,
    "show_ui_builder": False,

    ###############
    # Change view #
    ###############
    # Render out the change view as a single form, or in tabs, current options are
    # - single
    # - horizontal_tabs (default)
    # - vertical_tabs
    # - collapsible
    # - carousel
    "changeform_format": "horizontal_tabs",
    "changeform_format_overrides": {"auth.user": "collapsible", "auth.group": "vertical_tabs"},
    "language_chooser": False,
}


