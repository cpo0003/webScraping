import csv
import json

def csv_to_json(csv_file, json_file):
    # Lista para almacenar los datos del CSV
    data = []

    # Leer el archivo CSV y agregar los datos a la lista
    with open(csv_file, 'r', encoding='utf-8') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            data.append(row)

    # Escribir los datos en un archivo JSON
    with open(json_file, 'w', encoding='utf-8') as json_file:
        json_file.write(json.dumps(data, indent=4))

# Rutas de los archivos CSV y JSON
csv_file_path = 'excel_primark.csv'
json_file_path = 'productos.json'

# Llamar a la función para convertir CSV a JSON
csv_to_json(csv_file_path, json_file_path)
