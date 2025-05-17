from rest_framework.routers import DefaultRouter
from .views import PostView
from django.urls import path, include

router = DefaultRouter()
router.register(r'posts', PostView)

urlpatterns = [
    path("",include(router.urls))
]