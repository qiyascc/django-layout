from goodconf import GoodConf
import os

class Settings(GoodConf):
    debug: bool = True
    secret_key: str = ""

    class Config:
        env_prefix = "{{ project_name }}_"

config = Settings()
config.load()
