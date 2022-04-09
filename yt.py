
from googleapiclient.discovery import build
api_key = 'AIzaSyBCXJ9I5WRep9FGnkW35Bf_ArBsKtXY1dQ'


youtube = build('youtube', 'v3', developerKey=api_key)

request = youtube.channels().list(
        part='statistics',
        forUsername='schafer5'
    )

response = request.execute()

print(response)