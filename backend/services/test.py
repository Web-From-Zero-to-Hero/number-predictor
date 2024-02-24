import tensorflow as tf
import cv2
import numpy as np


model = tf.keras.models.load_model('model')
path = './Images/test.png'

try:
    img = cv2.imread(path)[:,:,0]
    img = np.invert(np.array([img]))
    prediction = model.predict(img)

    print(np.argmax(prediction))

except Exception as e:
    print(f"Error: {e}")