import * as React from "react"
export default function Logo(props:any) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={props.size}
        height={props.size}
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          imageRendering: "optimizeQuality",
          fillRule: "evenodd",
          clipRule: "evenodd",
        }}
        viewBox="0 0 17923.93 11894.11"
        className={`fill-foreground`}
        {...props}
      >
        <path d="M8961.15 3.73c4933.19 0 8959.06 2669.77 8959.06 5944.96 0 3271.94-4025.86 5941.7-8959.06 5941.7-4933.19 0-8957.42-2669.76-8957.42-5941.7C3.73 2673.5 4027.96 3.73 8961.15 3.73zm14.69 926.91c3763.13 0 6834.34 2292.8 6834.34 5107.8 0 2813.38-3071.21 5107.8-6834.34 5107.8-3761.5 0-6831.08-2294.43-6831.08-5107.8 0-2815 3069.58-5107.8 6831.08-5107.8z" />
        <path d="M9438.86 3757.49c-160.83 0-259.73 54.7-296.66 160.98-28.59 79.7-54.8 234.43-78.63 467.29-25.03 231.31-36.94 442.29-36.94 631.39 0 112.53 27.41 190.67 83.4 234.44 55.99 42.19 160.84 64.07 314.53 64.07 102.46 0 177.51-25 226.37-73.46 48.85-50.01 83.39-131.28 101.26-246.92 53.62-332.89 163.22-500.12 328.83-500.12 283.56 0 425.34 445.42 425.34 1337.81 0 564.19-61.96 979.91-184.67 1244.03-75.05 162.54-177.51 243.8-307.38 243.8-137.01 0-216.83-120.34-237.09-362.58-11.92-154.72-26.21-265.68-44.09-329.76-16.67-64.08-50.03-125.03-98.89-182.85-77.44-93.77-188.24-142.22-335.97-142.22-103.66 0-175.13 25-212.07 73.46-36.94 48.45-53.62 142.22-48.85 279.74 0 25.01-1.19 165.66-3.58 425.1 0 528.24 41.7 850.19 125.1 967.4 28.59 45.33 57.19 75.02 85.78 89.09 29.78 12.5 104.84 32.81 228.75 56.26 60.77 12.5 111.99 53.14 153.69 123.47 41.71 70.33 63.15 151.59 63.15 243.8 0 234.43-104.85 386.02-314.53 453.23-302.61 93.77-726.76 142.22-1273.61 142.22-480.14 0-810.16-37.51-991.24-110.96-82.22-32.82-147.74-93.77-198.97-182.85-51.23-89.09-77.44-185.98-77.44-292.26 0-134.41 36.93-243.8 112-325.07 19.06-18.75 82.2-57.82 191.81-115.65 129.86-67.2 208.5-221.92 233.52-467.29 41.7-375.08 63.14-1231.53 63.14-2567.77 0-576.7-15.49-950.21-45.27-1122.13-29.78-170.35-103.66-289.12-220.42-356.33-115.57-67.2-191.81-126.58-228.75-176.6-35.75-50.01-53.62-123.46-53.62-217.23 0-134.41 50.05-246.93 150.12-337.58 100.08-89.09 223.98-134.41 370.53-134.41 92.93 0 228.75 9.38 407.45 28.13 380.06 39.07 833.98 59.39 1361.77 59.39 844.71 0 1413.01-31.26 1707.28-92.21 39.31-6.25 69.1-9.38 90.55-9.38 81.01 0 159.65 60.95 233.51 182.85 204.93 342.27 307.38 720.48 307.38 1136.19 0 189.11-33.36 340.7-101.26 453.23-67.91 112.53-156.07 168.79-265.68 168.79-81.02 0-142.97-20.32-184.66-64.08-41.71-42.2-148.93-192.23-321.69-448.54-103.65-157.85-229.94-262.57-377.67-311.01-147.73-48.45-422.94-81.27-825.64-96.9zM13509.34 3582.89c434.97 0 815.35 162.54 1140.28 489.87 220.08 223.92 398.58 514.89 535.48 871.79 133.44 355.76 200.16 710.39 200.16 1066.15 0 523.98-131.71 992.26-395.98 1404.86-223.55 351.22-514.69 602.41-875.14 755.85-221.81 93.21-444.5 139.8-668.05 139.8-292.87 0-572.74-79.57-840.47-239.82-323.19-193.23-576.21-485.34-759.03-875.2-177.63-377.36-266.01-794.49-266.01-1249.14 0-528.53 113.51-994.54 342.25-1398.05 203.63-360.31 476.57-624 819.69-793.36 230.48-114.8 486.09-172.76 766.83-172.76zm78.94 946.26c-138.47-31.96-266.89 23.54-385.28 166.51-90.6 107.41-155.07 244.17-193.41 410.29-56.51 244.75-83.72 535.94-81.88 874.66 1.84 338.71 31.27 646.47 89.66 921.25 26.11 118 70 216.79 130.56 297.27 60.83 79.37 129.4 129.02 207.07 146.94 124.96 28.85 240.6-9.77 345.78-114.96 104.64-106.5 180.8-259.24 227.34-460.79 60.34-261.37 93.45-551.19 99.09-868.34 5.05-318.46-18.12-595.61-70.68-834.05-32.88-146.39-81.45-267.27-145.96-361.49-65.35-94.42-139.74-153.58-222.28-177.3zM3767.03 3703.93h1304.05c264.27 0 456.62-6.81 577.93-21.6 121.32-14.77 239.15-44.32 354.39-88.65 35.53-12.5 63.25-19.33 83.18-19.33 88.39 0 166.36 61.38 233.95 186.41 111.77 202.32 167.23 445.55 167.23 731.98 0 144.36-23.4 258.02-69.32 342.12-46.78 82.98-110.91 123.9-191.49 123.9-56.33 0-99.65-14.77-130.84-44.33-31.2-29.55-73.65-97.75-125.65-201.18-74.51-148.9-168.96-248.92-283.33-298.93-114.37-50.01-301.54-75.02-562.34-75.02-194.96 0-312.8 46.61-355.25 137.54-22.53 48.88-35.52 113.66-39.86 196.64-3.46 81.83-6.06 290.97-6.06 628.54 0 132.99 17.33 215.96 51.11 247.78 33.8 32.97 122.18 48.88 266.02 48.88 71.05 0 123.04-19.32 155.1-57.97 32.06-39.78 52.86-109.11 60.66-208 12.12-129.58 24.26-217.09 37.26-264.83 12.12-47.73 35.52-89.79 69.31-125.03 35.52-39.77 77.11-60.24 124.78-60.24 69.31 0 128.24 43.2 177.62 129.58 35.53 64.78 65.85 178.45 90.12 342.12 24.26 162.54 37.26 333.03 37.26 510.34 0 351.22-41.59 638.78-124.78 862.7-45.92 122.75-115.24 183-207.95 183-58.06 0-97.91-19.33-119.57-57.97-21.67-38.65-38.99-119.35-51.12-240.97-25.13-251.19-136.9-376.22-334.46-376.22-76.24 0-128.24 30.68-155.96 94.34-28.61 63.65-42.46 180.72-42.46 351.22 0 104.57 6.06 239.82 16.46 404.63 11.25 165.95 22.53 275.07 34.65 328.48 13 65.93 55.46 112.53 125.65 137.54 70.18 26.14 187.15 38.65 351.78 38.65 253.87 0 444.51-43.2 573.61-128.44 128.24-85.25 233.08-239.82 314.53-464.87 47.65-128.44 90.11-214.82 128.24-259.15 38.12-44.33 87.52-67.06 148.17-67.06 71.04 0 129.96 40.92 176.75 121.62 46.79 81.83 69.32 183 69.32 304.62 0 132.99-25.99 300.07-77.98 500.11-52.86 200.05-116.97 377.36-193.23 533.07-38.99 75.02-71.04 125.03-96.18 151.17-25.99 25.01-58.06 37.51-97.04 38.65-32.06-1.14-77.99-6.82-139.51-20.46-108.3-26.14-253-43.19-434.1-50.01H3505.37c-86.65 0-153.37-25.01-201.03-75.02-46.79-50.01-71.05-120.47-71.05-211.41 0-64.78 10.39-111.38 31.19-139.8 19.93-28.41 66.72-65.92 139.5-110.25 50.26-28.41 88.39-63.65 112.64-105.71 24.27-43.19 43.32-104.57 57.2-186.4 55.45-335.31 84.04-787.68 84.04-1355.98 0-857.02-40.73-1396.91-122.18-1621.96-16.45-44.32-35.53-75.01-55.46-93.2-20.8-17.05-63.25-38.65-127.37-62.52-96.18-38.65-144.7-122.75-144.7-253.47 0-71.6 16.46-134.11 48.52-189.81 32.05-55.69 74.51-92.06 126.51-110.25 65.85-19.32 194.09-29.56 383.84-29.56z" />
      </svg>
    )

}