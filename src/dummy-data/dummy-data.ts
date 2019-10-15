import { CrashItem } from "../models/crashItem";
import { Bucket } from "../models/bucket";


function randomNumber(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

function randomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function generateRandomCrashes():CrashItem[]{
        var crashText = [
            `Exception Type:        EXC_CRASH (SIGABRT)\nException Codes:       0x0000000000000000, 0x0000000000000000\n\nApplication Specific Information:\nabort() called\n\nThread 0 Crashed::\n0   libsystem_kernel.dylib        	0x9769169a __pthread_kill + 10\n1   libsystem_pthread.dylib       	0x9836bf19 pthread_kill + 101\n2   libsystem_c.dylib             	0x9bde5eee abort + 156\n3   libglib-2.0.0.dylib           	0x02b5dd8a g_assertion_message + 346\n4   libglib-2.0.0.dylib           	0x02b5e470 g_assertion_message_expr + 96\n5   libgncmod-gnome-utils.dylib   	0x0029ec4a gnc_main_window_init + 2650\n6   libgobject-2.0.0.dylib        	0x02ae7496 g_type_create_instance + 470\n7   libgobject-2.0.0.dylib        	0x02ad51a2 g_object_new_internal + 562\n8   libgobject-2.0.0.dylib        	0x02ad5a90 g_object_newv + 480\n9   libgobject-2.0.0.dylib        	0x02ad5b7d g_object_new + 61\n10  libgncmod-gnome-utils.dylib   	0x002a03d7 gnc_main_window_new + 39\n11  libgncmod-gnome-utils.dylib   	0x0029a6f5 gnc_gui_init + 581\n12  Gnucash-bin                   	0x00011387 main + 1143\n13  Gnucash-bin                   	0x00010ed6 start + 54\n\n`,
          `error -32768 svTempDisable: Temporarily disable card but run primary init.\n\n0# bar(int) at /path/to/source/file.cpp:70\n1# bar(int) at /path/to/source/file.cpp:70\n2# bar(int) at /path/to/source/file.cpp:70\n3# bar(int) at /path/to/source/file.cpp:70\n4# main at /path/to/main.cpp:93\n5# __libc_start_main in /lib/x86_64-linux-gnu/libc.so.6\n6# _start`,
          `Expression 'i < N' is false in function 'T& boost::array<T, N>::operator[](boost::array<T, N>::size_type) [with T = int; long unsigned int N = 5ul; boost::array<T, N>::reference = int&; boost::array<T, N>::size_type = long unsigned int]': out of range.\n\nBacktrace:\n\n0# boost::assertion_failed_msg(char const*, char const*, char const*, char const*, long) at ../example/assert_handler.cpp:39\n1# boost::array<int, 5ul>::operator[](unsigned long) at ../../../boost/array.hpp:124\n2# bar(int) at ../example/assert_handler.cpp:17\n3# foo(int) at ../example/assert_handler.cpp:25\n4# bar(int) at ../example/assert_handler.cpp:17\n5# foo(int) at ../example/assert_handler.cpp:25\n6# main at ../example/assert_handler.cpp:54\n7# 0x00007F991FD69F45 in /lib/x86_64-linux-gnu/libc.so.6\n8# 0x0000000000401139`,
           `Previous run crashed:\n\n0# 0x00007F2EC0A6A8EF\n\n1# my_signal_handler(int) at ../example/terminate_handler.cpp:37\n2# 0x00007F2EBFD84CB0\n3# 0x00007F2EBFD84C37\n4# 0x00007F2EBFD88028\n5# 0x00007F2EC0395BBD\n6# 0x00007F2EC0393B96\n7# 0x00007F2EC0393BE1\n8# bar(int) at ../example/terminate_handler.cpp:18\n9# foo(int) at ../example/terminate_handler.cpp:22\n10# bar(int) at ../example/terminate_handler.cpp:14\n11# foo(int) at ../example/terminate_handler.cpp:22\n12# main at ../example/terminate_handler.cpp:84\n13# 0x00007F2EBFD6FF45\n14# 0x0000000000402209`,
           `*** Segmentation fault Register dump:\n\nEAX: 0000000c   EBX: 00000080   ECX:\n00000000   EDX: 0000000c  ESI:\nbfdbf080   EDI: 080497e0   EBP:\nbfdbee38   ESP: bfdbee20\n\nEIP: 0805640f   EFLAGS: 00010282\n\nCS: 0073   DS: 007b   ES: 007b   FS:\n0000   GS: 0033   SS: 007b\n\nTrap: 0000000e   Error: 00000004\nOldMask: 00000000  ESP/signal:\nbfdbee20   CR2: 00000024\n\nFPUCW: ffff037f   FPUSW: ffff0000\nTAG: ffffffff  IPOFF: 00000000 \nCSSEL: 0000   DATAOFF: 00000000  \n\nDATASEL: 0000\n\nST(0) 0000 0000000000000000   ST(1)\n0000000000000000   ST(3) 0000\n0000000000000000  ST(4) 0000\n0000000000000000   ST(5) 0000\n0000000000000000  ST(6) 0000\n0000000000000000   ST(7) 0000\n0000000000000000\n\n\nBacktrace:\n/lib/libSegFault.so[0xb7f9e100]\n??:0(??)[0xb7fa3400]\n/usr/include/c++/4.3/bits/stl_queue.h:226(_ZNSt5queueISsSt5dequeISsSaISsEEE4pushERKSs)[0x805647a]\n/home/dbingham/src/middle-earth-mud/alpha6/src/engine/player.cpp:73(_ZN6Player5inputESs)[0x805377c]\n/home/dbingham/src/middle-earth-mud/alpha6/src/engine/socket.cpp:159(_ZN6Socket4ReadEv)[0x8050698]\n/home/dbingham/src/middle-earth-mud/alpha6/src/engine/socket.cpp:413(_ZN12ServerSocket4ReadEv)[0x80507ad]\n/home/dbingham/src/middle-earth-mud/alpha6/src/engine/socket.cpp:300(_ZN12ServerSocket4pollEv)[0x8050b44]\n/home/dbingham/src/middle-earth-mud/alpha6/src/engine/main.cpp:34(main)[0x8049a72]\n/lib/tls/i686/cmov/libc.so.6(__libc_start_main+0xe5)[0xb7d1b775]\n/build/buildd/glibc-2.9/csu/../sysdeps/i386/elf/start.S:122(_start)[0x8049801]\n`
        ]
            var arr = [];
            var prefix = ['A', 'B', 'C', 'D', 'E'];
            var osArr = ['Windows', 'Linux', 'OSX'];
            var apps = ['Red dead redemption', 'Battlefield 3', 'PUBG', 'Fortnite', 'Age of Empires', 'F1 2019', 'The Witcher 3', ' Zelda: Breath of the Wild', 'Pokemon Red']
            for(var i = 0; i < 200; i++){
                
                let id = prefix[randomNumber(5)] + randomNumber(1000);
                let errMsg = crashText[randomNumber(5)];
                let os = osArr[randomNumber(3)];
                let app = apps[randomNumber(9)];
                let date = randomDate(new Date(1999, 0, 1), new Date());
    
                arr.push(new CrashItem(id, errMsg, app, os, date))
               
            }
            
            return arr;
    }




export const crashItemArr: CrashItem[] = generateRandomCrashes();


export const crashBuckets: Bucket[] = [
    new Bucket('A', crashItemArr.filter(item => {
        return item.crashId.includes('A');
    })),
    new Bucket('B', crashItemArr.filter(item => {
        return item.crashId.includes('B');
    })),
    new Bucket('C', crashItemArr.filter(item => {
        return item.crashId.includes('C');
    })),
    new Bucket('D', crashItemArr.filter(item => {
        return item.crashId.includes('D');
    })),
    new Bucket('E', crashItemArr.filter(item => {
        return item.crashId.includes('E');
    }))
];



