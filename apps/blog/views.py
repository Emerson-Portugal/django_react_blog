from .models import Post
from rest_framework import viewsets
from .serializers import PostSerializer


class BlogView(viewsets.ModelViewSet):

    def post():
        queryset = Post.objects.all()
        serializer_class = PostSerializer

        return ({'posts': serializer_class.data})
    


    



