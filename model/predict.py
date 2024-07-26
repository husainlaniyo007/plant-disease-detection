import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.datasets import mnist
import numpy as np

# Load the saved model
model = load_model('model.h5')

# Load the MNIST dataset
(_, _), (x_test, y_test) = mnist.load_data()

# Preprocess the data (same as training)
x_test = x_test.reshape(-1, 28 * 28).astype('float32') / 255.0

# Make predictions on the test set
predictions = model.predict(x_test)

# Get the predicted class for each test sample
predicted_classes = np.argmax(predictions, axis=1)

# Print some sample predictions
print("Sample predictions:")
for i in range(10):
    print(f"Image {i + 1}: Predicted label = {predicted_classes[i]}, True label = {y_test[i]}")

# Optional: Evaluate the model on the test set
loss, accuracy = model.evaluate(x_test, tf.keras.utils.to_categorical(y_test, 10))
print(f'\nTest accuracy: {accuracy:.4f}')

