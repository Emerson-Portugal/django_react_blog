from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer

class BlogView(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()