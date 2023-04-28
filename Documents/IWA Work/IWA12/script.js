// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

status1 = document.queryselector('.status');
reserve1 = document.queryselector('.reserve');
checkout1 = document.queryselector('.checkout');
checkin1 = document.queryselector('.checkin');
book1 = document.querySelector('#book1');

status2 = document.queryselector('.status');
reserve2 = document.queryselector('.reserve');
checkout2 = document.queryselector('.checkout');
checkin2 = document.queryselector('.checkin');
book2 = document.querySelector('#book2');

status3 = document.querySelector('.status');
reserve3 = document.querySelector('.reserve');
checkout3 = document.querySelector('.checkout');
checkin3 = document.querySelector('.checkin');
book3 = document.querySelector('#book3');

checkin1.style.color = "";
status1.style.color = STATUS_MAP.status.color;
STATUS_MAP.overdue.canReserve ? 'enabled' : 'disabled';
STATUS_MAP.overdue.canCheckout ? 'enabled' : 'disabled';
STATUS_MAP.overdue.canCheckIn ? 'enabled' : 'disabled';

checkin2.style.color = "";
status2.style.color = STATUS_MAP.status.color;
STATUS_MAP.status.canReserve ? 'enabled' : 'disabled';
STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled';
STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled';

checkin3.style.color = "";
status3.style.color = STATUS_MAP.status.color;
STATUS_MAP.status.canReserve ? 'enabled' : 'disabled';
STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled';
STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled';