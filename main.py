import eel
from datetime import datetime
import json

eel.init('web', allowed_extensions=['.js', '.html'])


@eel.expose
def write_log(data):
    with open(f'logs/log-{get_date_string()}.txt', 'a') as log:
        log.write(data)
        log.write('\n')


@eel.expose
def save_data_to_file(data):
    with open(f'logs/data/data-{get_date_string(time=True)}.txt', 'w') as log:
        log.write(json.dumps(data, indent=4))


def get_date_string(time=False):
    if time:
        return datetime.now().strftime("%d-%m-%Y-%H-%M-%S")
    return datetime.now().strftime("%d-%m-%Y")


eel.start('index.html', size=(320, 480))
