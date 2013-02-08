from django.db import models
from userena.models import UserenaBaseProfile
from django.contrib.auth.models import User
from django.utils.translation import ugettext as _



class UserenaCustomProfile(UserenaBaseProfile):
    user = models.OneToOneField(User,
                                unique=True,
                                verbose_name=_('user'),
                                related_name='my_profile')