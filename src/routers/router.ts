import * as express from 'express';

import { crashBuckets } from '../dummy-data/dummy-data';
import { CrashItem } from '../models/crashItem';
import { Bucket } from '../models/bucket';

export class Router {
    public bucketItems = crashBuckets;
    public routes(app: express.Application): void {

        app.route('/buckets')
            .get((req: express.Request, res: express.Response) => {
                res.send(this.bucketItems);
            });

        app.route('/buckets/:name')
            .get((req: express.Request, res: express.Response) =>{
                let bucket: Bucket;
                this.bucketItems.filter(b => {
                    if(b.name === req.params.name.toUpperCase()){
                        bucket = b;
                    }
                });
                res.send(bucket);
            });

        app.route('/buckets/all/items')
            .get((req: express.Request, res: express.Response) => {
                let itemArr: CrashItem[] = [];
                this.bucketItems.forEach(b => {
                    itemArr = itemArr.concat(b.items);
                });
                res.send(itemArr);
            });
        
        app.route('/buckets/:name/items')
            .get((req: express.Request, res: express.Response)=>{
                let items: CrashItem[];
                this.bucketItems.filter(b=> {
                    if(b.name === req.params.name.toUpperCase()){
                        items = b.items;
                    }
                });
                res.send(items);
            })

        app.route('/buckets/:name/items/:id')
            // .get((req: express.Request, res: express.Response) => {
            //     let items: CrashItem[];
            //     this.bucketItems.filter(bucket => {
            //         if(bucket.name === req.params.name.toUpperCase()){
            //             items = bucket.items;
            //         }
            //         return;
            //     });
            //     let item = items.find(ci => ci.crashId === req.params.id.toUpperCase());
            //     res.send(item);
            // })
            .delete((req: express.Request, res: express.Response)=>{
                let bIndex: number;
                let cIndex: number;
                this.bucketItems.filter((bucket, i) => {
                    if(bucket.name === req.params.name.toUpperCase()){
                        bIndex = i;
                    }
                    return;
                });
                this.bucketItems[bIndex].items.filter((ci, i) => {
                    if(ci.crashId === req.params.id.toUpperCase()){
                        cIndex = i;
                    }
                });
                this.bucketItems[bIndex].items.splice(cIndex, 1);
                res.send(this.bucketItems);
            });

        app.route('/healthcheck')
        .get((req: express.Request, res: express.Response) => {
            res.status(200).send({
                message: 'API Healthcheck OK!'
            });
        });
    }
}