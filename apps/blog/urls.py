from django.urls import include, path
from rest_framework import routers
from .views import BlogView

router = routers.DefaultRouter()
router.register(r"blogs", BlogView, basename="blogs")

urlpatterns = [
    path("v1/", include(router.urls)),
]


 #path("v1/", views.BlogView.as_view({'get': 'list'}), name='blog-api')