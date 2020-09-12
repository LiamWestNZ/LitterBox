
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path

from .views import (
    profile_update_view,
    profile_detail_view,
)

urlpatterns = [
    path('edit', profile_update_view),
    path('<str:username>', profile_detail_view),
    

    
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
