"""script to convert images"""
import os
from PIL import Image

DIR = '../dspyt/public/images/posts/explorer/'

files = os.listdir(DIR)
images = [file for file in files if file.endswith(('jpg', 'png'))]

for element in images:
    image = Image.open(f'{DIR}/{element}')
    image = image.convert('RGB')
    image_name = element.split('.')[0]
    image.save(f'{DIR}/{image_name}.webp', 'webp')