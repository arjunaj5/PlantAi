from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import User
from .serializers import UserSerializer, UserAuthenticationSerializer


@api_view(['GET'])
def get_user(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def verify_user(request):
    serializer = UserAuthenticationSerializer(data=request.data)
    if serializer.is_valid():
        print(serializer.data)
        name = serializer.data['name']
        password = serializer.data['password']
        auth = User.objects.filter(name=name, password=password)
        if auth:
            return Response(request.data)
        else:
            return Response("invalid")