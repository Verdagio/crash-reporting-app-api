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
          `error -32768 svTempDisable: Temporarily disable card but run primary init.\n\nLorem ipsum dolor sit amet, \nconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \nIn ante metus dictum at tempor commodo ullamcorper a lacus. Diam volutpat commodo sed egestas egestas fringilla. \nFringilla phasellus faucibus scelerisque eleifend donec. At volutpat diam ut venenatis tellus in. \nBibendum at varius vel pharetra. Sed tempus urna et pharetra pharetra massa massa. \nConsequat interdum varius sit amet mattis vulputate enim. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. \nDonec massa sapien faucibus et molestie ac feugiat sed lectus. \nVitae turpis massa sed elementum tempus egestas.`,
          `error -23043 noResultProc: No result procedure is passed to the address translation call when the resolver must be used to find the address.\n\nVel facilisis volutpat est velit. Nec feugiat in fermentum posuere.\nDuis tristique sollicitudin nibh sit amet commodo nulla facilisi. \nOdio euismod lacinia at quis risus. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu.\nTincidunt praesent semper feugiat nibh sed. \nTempus egestas sed sed risus pretium quam. Diam sit amet nisl suscipit adipiscing bibendum est. \nScelerisque mauris pellentesque pulvinar pellentesque habitant morbi. \nNec ultrices dui sapien eget mi proin sed libero enim. \nAenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.\nA diam maecenas sed enim ut sem viverra. Potenti nullam ac tortor vitae purus. \nEuismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Fames ac turpis egestas maecenas. \nAenean vel elit scelerisque mauris pellentesque pulvinar.\nMi in nulla posuere sollicitudin aliquam.`,
           `error -10090 telPBErr: parameter block error bad format\n\nNec feugiat nisl pretium fusce id velit. Ac placerat vestibulum lectus mauris ultrices eros. \nVolutpat diam ut venenatis tellus. Lacus luctus accumsan tortor posuere ac. \nTurpis massa sed elementum tempus egestas. Magna eget est lorem ipsum dolor sit amet. \nTincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Gravida rutrum quisque non tellus. \nEgestas diam in arcu cursus. Risus ultricies tristique nulla aliquet enim tortor at. \nPurus sit amet volutpat consequat mauris nunc congue nisi vitae. \nLectus proin nibh nisl condimentum id venenatis. Amet nisl purus in mollis nunc sed id semper. \nArcu risus quis varius quam quisque id diam. Hendrerit dolor magna eget est lorem ipsum. \nPellentesque pulvinar pellentesque habitant morbi tristique senectus.`,
           `error -6223 kDMMirroringBlocked: DMBlockMirroring() has been called.\n`
        ]
            var arr = [];
            var prefix = ['A', 'B', 'C', 'D', 'E'];
            var osArr = ['Windows', 'Linux', 'OSX'];
            var apps = ['Red dead redemption', 'Battlefield 3', 'PUBG', 'Fortnite', 'Age of Empires', 'F1 2019', 'The Witcher 3', ' Zelda: Breath of the Wild', 'Pokemon Red']
            for(var i = 0; i < 200; i++){
                
                let id = prefix[randomNumber(5)] + randomNumber(1000);
                let errMsg = crashText[randomNumber(4)];
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



