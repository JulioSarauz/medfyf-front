import { LoginService } from "../servicios/rest/login.service";
import { PublicacionesService } from "../servicios/rest/publicaciones.service";
import {DialogService} from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

export const SERVICIOS = [
    LoginService,
    PublicacionesService,
    DialogService,
    MessageService
];