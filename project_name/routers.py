class CoreRouter:
    admin_models = {'user', 'group', 'permission', 'contenttype', 'session'}
    
    def db_for_read(self, model, **hints):
        if model._meta.app_label == 'admin' or model._meta.model_name in self.admin_models:
            return 'default'
        return 'apps'

    def db_for_write(self, model, **hints):
        if model._meta.app_label == 'admin' or model._meta.model_name in self.admin_models:
            return 'default'
        return 'apps'

    def allow_relation(self, obj1, obj2, **hints):
        return True

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        if app_label == 'admin' or model_name in self.admin_models:
            return db == 'default'
        return db == 'apps'
