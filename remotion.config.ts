/**
 * Note: When using the Node.JS APIs, the config file
 * doesn't apply. Instead, pass options directly to the APIs.
 *
 * All configuration options: https://remotion.dev/docs/config
 */

import { Config } from "@remotion/cli/config";
import { enableTailwind } from '@remotion/tailwind-v4';

Config.setVideoImageFormat("jpeg");
// CALIDAD: cada frame se captura como JPEG antes de encodear. Por defecto Remotion
// usa calidad 80 → con el grano cinematográfico y el zoom constante se ve blando.
// La subimos a 100 (frames nítidos) y bajamos el CRF a 16 (más bitrate, H.264 casi
// sin pérdida). NO se toca resolución/fps. Los chunks del farm se concatenan con
// -c copy, así que estos ajustes definen la calidad final.
Config.setJpegQuality(100);
Config.setCrf(16);
Config.setOverwriteOutput(true);
Config.overrideWebpackConfig(enableTailwind);
