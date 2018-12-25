from django.http import JsonResponse
from django.shortcuts import redirect
from django.urls import reverse
from django.utils.deprecation import MiddlewareMixin

from App.models import AXFUser

REQUIRE_LOGIN_JSON = [
    '/axf/addtocart/',
    '/axf/subtocart/',
    '/axf/changecartstate/',
    '/axf/makeorder/',
    '/axf/addaddress/',
]

REQUIRE_LOGIN = [
    '/axf/cart/',
    '/axf/orderdetail/',
    '/axf/orderlistnotpay/',
    '/axf/addresslist/',

]

class LoginMiddleWare(MiddlewareMixin):

    def process_request(self, request):

        if request.path in REQUIRE_LOGIN_JSON:

            user_id = request.session.get("user_id")

            if user_id:
                try:
                    user = AXFUser.objects.get(pk=user_id)
                    request.user = user
                except:
                    # return redirect(reverse('axf:login'))
                    data = {
                        'status':302,
                        'msg':'user not avaliable'
                    }

                    return JsonResponse(data)
            else:
                data = {
                    'status': 302,
                    'msg': 'user not login'
                }
                return JsonResponse(data)

        if request.path in REQUIRE_LOGIN:
            user_id = request.session.get("user_id")

            if user_id:
                try:
                    user = AXFUser.objects.get(pk=user_id)
                    request.user = user

                except:
                    return redirect(reverse('axf:login'))
            else:
                return redirect(reverse('axf:login'))
