from rest_framework import serializers

class TitleCheckerSerializer(serializers.Serializer):

    news = serializers.CharField()

    class Meta:
        fields = ["news", ]