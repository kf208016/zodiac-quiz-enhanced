#!/usr/bin/env python3
import http.server
import ssl
import os

os.chdir('/root/zodiac-quiz-enhanced')

class Handler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        pass

context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
context.load_cert_chain('/root/zodiac-quiz-enhanced/cert.pem', '/root/zodiac-quiz-enhanced/key.pem')

server = http.server.HTTPServer(('0.0.0.0', 8443), Handler)
server.socket = context.wrap_socket(server.socket, server_side=True)
print('HTTPS started on 8443')
server.serve_forever()