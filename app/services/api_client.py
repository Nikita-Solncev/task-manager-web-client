import requests

class APIClient:
    def __init__(self, base_url):
        self.base_url = base_url
        
    def get_data(self, endpoint):
        response = requests.get(f"{self.base_url}/{endpoint}")
        response.raise_for_status()  # Поднимает исключение для HTTP ошибок
        return response.json()
    
    def post_data(self, endpoint, data):
        response = requests.post(f"{self.base_url}/{endpoint}", json=data)
        response.raise_for_status()
        return response.json()