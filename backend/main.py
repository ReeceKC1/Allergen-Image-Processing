from flask import *
import traceback
import pytesseract
import cv2
from PIL import Image 
import json

app = Flask(__name__)
pytesseract.pytesseract.tesseract_cmd = r'F:\\Software\\Tesseract\\tesseract.exe'

@app.route('/evaluate', methods=['POST'])
def evaluate_allergens():
    try:
        img = request.files['file']
        json2 = json.load(request.files['json'])

        if not img or not json2:
            return jsonify({'error': 'missing data'}), 400

        img = Image.open(img)

        text = pytesseract.image_to_string(img)

        allergens = []

        for allergen in json2['allergens']:
            if allergen.lower() in text.lower():
                allergens.append(allergen)

        if len(allergens) == 0:
            return jsonify({'success': 'no allergens'}), 200
        
        return jsonify({'success': allergens}), 200
    except Exception as e:
        print(traceback.format_exc())
        print(e)
        return jsonify({'error': 'error'}), 400

if __name__ == '__main__':
    app.run(debug=True)
