@echo off
FOR %%i IN (A B C D E F G H I J K L M N O P Q R S T U V W X Y Z) DO (
  md D:\WISSEN\learn2022-23\3D\tutorials-point\%%i%\images
  echo NUL > D:\WISSEN\learn2022-23\3D\tutorials-point\%%i%\index.html
  TIMEOUT /T 1
)