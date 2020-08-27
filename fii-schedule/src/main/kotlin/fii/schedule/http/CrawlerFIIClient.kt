package fii.schedule.http

import io.micronaut.core.annotation.Introspected
import io.micronaut.http.annotation.Get
import io.micronaut.http.annotation.PathVariable
import io.micronaut.http.client.annotation.Client

@Introspected
@Client("\${crawler.url}")
interface CrawlerFIIClient {

    @Get("/stocks/{code}")
    fun findFII(@PathVariable code : String) : FIIResult
}