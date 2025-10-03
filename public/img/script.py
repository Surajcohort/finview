import requests

url = "https://softivuslab.com/wp/finview/wp-content/uploads/2024/03/hero_img2.png"

response = requests.get(url)

if response.status_code == 200:
    with open("hero_img2.png", "wb") as file:
        file.write(response.content)
else:
    print(f"Error: Unable to download the image. Status code: {response.status_code}")   