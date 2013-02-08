from django.core.context_processors import request
from userena.views import ExtraContextTemplateView
from django.contrib.auth.decorators import login_required


@login_required
def home(request):
    template_name = 'icantieri/home.html'
    extra_context = dict()
    #extra_context['merchandises'] = get_public_merchandises
    return ExtraContextTemplateView.as_view(template_name=template_name,
                                            extra_context=extra_context)(request)
