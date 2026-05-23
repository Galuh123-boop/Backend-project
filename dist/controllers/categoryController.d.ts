import { Request, Response } from "express";
export declare const getCategory: (req: Request, res: Response) => Promise<void>;
export declare const createCategory: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const showCategory: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateCategory: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteCategory: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=categoryController.d.ts.map