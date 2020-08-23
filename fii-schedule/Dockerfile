FROM oracle/graalvm-ce:20.1.0-java8 as graalvm
RUN gu install native-image

COPY . /home/app/fii-schedule
WORKDIR /home/app/fii-schedule

RUN native-image --no-server -cp build/libs/fii-schedule-*-all.jar

FROM frolvlad/alpine-glibc
RUN apk update && apk add libstdc++
EXPOSE 8080
COPY --from=graalvm /home/app/fii-schedule/fii-schedule /app/fii-schedule
ENTRYPOINT ["/app/fii-schedule"]
