/*

Made by doami2005
Idea from https://woodongwoo.tistory.com/m/1

getLocalIpAddress(1)
// Ipv4

getLocalIpAddress(2)
// Ipv6

*/

const NetworkInterface = java.net.NetworkInterface;
const Inet4Address = java.net.Inet4Address;
const Inet6Address = java.net.Inet6Address;
const TYPE_INET4ADDRESS = 1;
const TYPE_INET6ADDRESS = 2;

function getLocalIpAddress(type) {
    try {
        for (en = NetworkInterface.getNetworkInterfaces(); en.hasMoreElements(); ) {
            intf = en.nextElement();
            for (enumIpAddr = intf.getInetAddresses(); enumIpAddr.hasMoreElements(); ) {
                inetAddress = enumIpAddr.nextElement();
                if (!inetAddress.isLoopbackAddress()) {
                    switch (type) {
                        case TYPE_INET6ADDRESS:
                            if (inetAddress instanceof Inet6Address) {
                                return inetAddress.getHostAddress().toString();
                            }
                            break;
                        case TYPE_INET4ADDRESS:
                            if (inetAddress instanceof Inet4Address) {
                                return inetAddress.getHostAddress().toString();
                            }
                            break;
                    }
                }
            }
        }
    } catch (e) {
        return e;
    }
    return null;
}
