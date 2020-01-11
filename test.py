import cv2
import pytesseract

pytesseract.pytesseract.tesseract_cmd = r'F:\\Software\\Tesseract\\tesseract.exe'

img = cv2.imread('F:\\Coding\\Python\\Allergen Image Processing\\vrkIj.png')

print(img)

text = pytesseract.image_to_string(img)

print(text)