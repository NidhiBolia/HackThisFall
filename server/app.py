import tkinter as tk
import customtkinter as ctk
import torch
import numpy
import cv2
from PIL import Image, ImageTk
import vlc

app=tk.Tk()
app.geometry("800x600")
app.title("Emotion Recognition")
ctk.set_appearance_mode("dark")

app.mainloop()
