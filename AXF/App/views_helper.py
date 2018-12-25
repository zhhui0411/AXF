import hashlib

from django.core.mail import send_mail
from django.template import loader

from App.models import Cart

def hash_str(source):
    return hashlib.new('sha512', source.encode('utf-8')).hexdigest()


def get_total_price():

    carts = Cart.objects.filter(c_is_select=True)

    total = 0

    for cart in carts:
        total += cart.c_goods_num * cart.c_goods.price

    return "{:.2f}".format(total)
