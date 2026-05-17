import React, { useState } from 'react'

// ── IPHONE DATA ───────────────────────────────────────────────

const IPHONE_SERIES = [
    'Ip 6', 'Ip 6+', 'Ip 6s', 'Ip 6s+',
    'Ip 7', 'Ip 7+',
    'Ip 8', 'Ip 8+',
    'Ip X', 'Ip XS', 'Ip XS Max', 'Ip XR', 'Ip SE 2',
    'Ip 11', 'Ip 11 Pro', 'Ip 11 Pro Max',
    'Ip 12', 'Ip 12 Pro', 'Ip 12 Pro Max', 'Ip 12 Mini',
    'Ip 13', 'Ip 13 Pro', 'Ip 13 Pro Max', 'Ip 13 Mini',
    'Ip 14', 'Ip 14 Plus', 'Ip 14 Pro', 'Ip 14 Pro Max',
    'Ip 15', 'Ip 15 Plus', 'Ip 15 Pro', 'Ip 15 Pro Max',
]

const IPHONE_PARTS = {
    LCD: {
        'Ip 6': '225K', 'Ip 6+': '250K', 'Ip 6s': '250K', 'Ip 6s+': '250K',
        'Ip 7': '240K', 'Ip 7+': '250K', 'Ip 8': '270K', 'Ip 8+': '300K',
        'Ip X': '500K', 'Ip XS': '550K', 'Ip XS Max': '550K', 'Ip XR': '500K', 'Ip SE 2': '450K',
        'Ip 11': '550K', 'Ip 11 Pro': '675K', 'Ip 11 Pro Max': '725K',
        'Ip 12': '750K', 'Ip 12 Pro': '750K', 'Ip 12 Pro Max': '825K', 'Ip 12 Mini': '900K',
        'Ip 13': '850K', 'Ip 13 Pro': '1.075K', 'Ip 13 Pro Max': '1.275K', 'Ip 13 Mini': '1.300K',
        'Ip 14': '940K', 'Ip 14 Plus': '975K', 'Ip 14 Pro': '1.375K', 'Ip 14 Pro Max': '1.450K',
        'Ip 15': '1.150K', 'Ip 15 Plus': '1.150K', 'Ip 15 Pro': '1.400K', 'Ip 15 Pro Max': '1.650K',
    },
    Baterai: {
        'Ip 6': '170K', 'Ip 6+': '170K', 'Ip 6s': '170K', 'Ip 6s+': '190K',
        'Ip 7': '200K', 'Ip 7+': '220K', 'Ip 8': '230K', 'Ip 8+': '250K',
        'Ip X': '300K', 'Ip XS': '350K', 'Ip XS Max': '350K', 'Ip XR': '350K', 'Ip SE 2': '350K',
        'Ip 11': '400K', 'Ip 11 Pro': '400K', 'Ip 11 Pro Max': '400K',
        'Ip 12': '450K', 'Ip 12 Pro': '450K', 'Ip 12 Pro Max': '450K', 'Ip 12 Mini': '450K',
        'Ip 13': '500K', 'Ip 13 Pro': '500K', 'Ip 13 Pro Max': '500K', 'Ip 13 Mini': '500K',
        'Ip 14': '600K', 'Ip 14 Plus': '600K', 'Ip 14 Pro': '600K', 'Ip 14 Pro Max': '600K',
        'Ip 15': '650K', 'Ip 15 Plus': '650K', 'Ip 15 Pro': '650K', 'Ip 15 Pro Max': '650K',
    },
    'Front Cam': {
        'Ip 6': '100K', 'Ip 6+': '100K', 'Ip 6s': '150K', 'Ip 6s+': '150K',
        'Ip 7': '200K', 'Ip 7+': '200K', 'Ip 8': '250K', 'Ip 8+': '250K',
        'Ip X': '300K', 'Ip XS': '300K', 'Ip XS Max': '350K', 'Ip XR': '300K', 'Ip SE 2': '250K',
        'Ip 11': '350K', 'Ip 11 Pro': '350K', 'Ip 11 Pro Max': '350K',
        'Ip 12': '400K', 'Ip 12 Pro': '400K', 'Ip 12 Pro Max': '400K', 'Ip 12 Mini': '400K',
        'Ip 13': '500K', 'Ip 13 Pro': '600K', 'Ip 13 Pro Max': '600K', 'Ip 13 Mini': '500K',
        'Ip 14': '700K', 'Ip 14 Plus': '700K', 'Ip 14 Pro': '700K', 'Ip 14 Pro Max': '700K',
        'Ip 15': '950K', 'Ip 15 Plus': '950K', 'Ip 15 Pro': '1.000K', 'Ip 15 Pro Max': '1.200K',
    },
    'Rear Cam': {
        'Ip 6': '175K', 'Ip 6+': '250K', 'Ip 6s': '250K', 'Ip 6s+': '300K',
        'Ip 7': '350K', 'Ip 7+': '450K', 'Ip 8': '450K', 'Ip 8+': '550K',
        'Ip X': '500K', 'Ip XS': '500K', 'Ip XS Max': '500K', 'Ip XR': '550K', 'Ip SE 2': '500K',
        'Ip 11': '600K', 'Ip 11 Pro': '850K', 'Ip 11 Pro Max': '850K',
        'Ip 12': '750K', 'Ip 12 Pro': '1.350K', 'Ip 12 Pro Max': '1.400K', 'Ip 12 Mini': '950K',
        'Ip 13': '850K', 'Ip 13 Pro': '1.500K', 'Ip 13 Pro Max': '1.500K', 'Ip 13 Mini': '1.000K',
        'Ip 14': '1.200K', 'Ip 14 Plus': '1.200K', 'Ip 14 Pro': '1.500K', 'Ip 14 Pro Max': '1.500K',
        'Ip 15': '1.200K', 'Ip 15 Plus': '1.200K', 'Ip 15 Pro': '1.800K', 'Ip 15 Pro Max': '1.900K',
    },
    'Speaker Atas': {
        'Ip 6': '80K', 'Ip 6+': '80K', 'Ip 6s': '80K', 'Ip 6s+': '80K',
        'Ip 7': '100K', 'Ip 7+': '100K', 'Ip 8': '100K', 'Ip 8+': '100K',
        'Ip X': '200K', 'Ip XS': '200K', 'Ip XS Max': '250K', 'Ip XR': '200K', 'Ip SE 2': '150K',
        'Ip 11': '200K', 'Ip 11 Pro': '250K', 'Ip 11 Pro Max': '300K',
        'Ip 12': '250K', 'Ip 12 Pro': '250K', 'Ip 12 Pro Max': '300K', 'Ip 12 Mini': '300K',
        'Ip 13': '300K', 'Ip 13 Pro': '300K', 'Ip 13 Pro Max': '300K', 'Ip 13 Mini': '300K',
        'Ip 14': '400K', 'Ip 14 Plus': '400K', 'Ip 14 Pro': '400K', 'Ip 14 Pro Max': '400K',
        'Ip 15': '500K', 'Ip 15 Plus': '500K', 'Ip 15 Pro': '500K', 'Ip 15 Pro Max': '500K',
    },
    Buzzer: {
        'Ip 6': '100K', 'Ip 6+': '100K', 'Ip 6s': '100K', 'Ip 6s+': '110K',
        'Ip 7': '150K', 'Ip 7+': '150K', 'Ip 8': '170K', 'Ip 8+': '170K',
        'Ip X': '210K', 'Ip XS': '210K', 'Ip XS Max': '230K', 'Ip XR': '210K', 'Ip SE 2': '180K',
        'Ip 11': '200K', 'Ip 11 Pro': '250K', 'Ip 11 Pro Max': '250K',
        'Ip 12': '250K', 'Ip 12 Pro': '250K', 'Ip 12 Pro Max': '320K', 'Ip 12 Mini': '300K',
        'Ip 13': '300K', 'Ip 13 Pro': '300K', 'Ip 13 Pro Max': '300K', 'Ip 13 Mini': '300K',
        'Ip 14': '400K', 'Ip 14 Plus': '400K', 'Ip 14 Pro': '400K', 'Ip 14 Pro Max': '400K',
        'Ip 15': '500K', 'Ip 15 Plus': '500K', 'Ip 15 Pro': '500K', 'Ip 15 Pro Max': '500K',
    },
    'Face ID': {
        'Ip 6': '-', 'Ip 6+': '-', 'Ip 6s': '-', 'Ip 6s+': '-',
        'Ip 7': '-', 'Ip 7+': '-', 'Ip 8': '-', 'Ip 8+': '-',
        'Ip X': '450K', 'Ip XS': '450K', 'Ip XS Max': '450K', 'Ip XR': '450K', 'Ip SE 2': '-',
        'Ip 11': '500K', 'Ip 11 Pro': '500K', 'Ip 11 Pro Max': '500K',
        'Ip 12': '700K', 'Ip 12 Pro': '700K', 'Ip 12 Pro Max': '700K', 'Ip 12 Mini': '700K',
        'Ip 13': '900K', 'Ip 13 Pro': '900K', 'Ip 13 Pro Max': '900K', 'Ip 13 Mini': '900K',
        'Ip 14': '1.200K', 'Ip 14 Plus': '1.200K', 'Ip 14 Pro': '1.200K', 'Ip 14 Pro Max': '1.200K',
        'Ip 15': '1.500K', 'Ip 15 Plus': '1.500K', 'Ip 15 Pro': '1.500K', 'Ip 15 Pro Max': '1.500K',
    },
    Housing: {
        'Ip 6': '150K', 'Ip 6+': '230K', 'Ip 6s': '230K', 'Ip 6s+': '230K',
        'Ip 7': '230K', 'Ip 7+': '280K', 'Ip 8': '280K', 'Ip 8+': '320K',
        'Ip X': '400K', 'Ip XS': '400K', 'Ip XS Max': '500K', 'Ip XR': '400K', 'Ip SE 2': '320K',
        'Ip 11': '450K', 'Ip 11 Pro': '550K', 'Ip 11 Pro Max': '600K',
        'Ip 12': '600K', 'Ip 12 Pro': '700K', 'Ip 12 Pro Max': '750K', 'Ip 12 Mini': '600K',
        'Ip 13': '650K', 'Ip 13 Pro': '850K', 'Ip 13 Pro Max': '900K', 'Ip 13 Mini': '650K',
        'Ip 14': '850K', 'Ip 14 Plus': '850K', 'Ip 14 Pro': '1.250K', 'Ip 14 Pro Max': '1.300K',
        'Ip 15': '1.600K', 'Ip 15 Plus': '1.600K', 'Ip 15 Pro': '1.850K', 'Ip 15 Pro Max': '1.900K',
    },
    Backglass: {
        'Ip 6': '-', 'Ip 6+': '-', 'Ip 6s': '-', 'Ip 6s+': '-',
        'Ip 7': '-', 'Ip 7+': '-', 'Ip 8': '150K', 'Ip 8+': '150K',
        'Ip X': '250K', 'Ip XS': '250K', 'Ip XS Max': '250K', 'Ip XR': '250K', 'Ip SE 2': '250K',
        'Ip 11': '300K', 'Ip 11 Pro': '350K', 'Ip 11 Pro Max': '380K',
        'Ip 12': '400K', 'Ip 12 Pro': '400K', 'Ip 12 Pro Max': '400K', 'Ip 12 Mini': '400K',
        'Ip 13': '450K', 'Ip 13 Pro': '450K', 'Ip 13 Pro Max': '450K', 'Ip 13 Mini': '450K',
        'Ip 14': '500K', 'Ip 14 Plus': '500K', 'Ip 14 Pro': '500K', 'Ip 14 Pro Max': '500K',
        'Ip 15': '550K', 'Ip 15 Plus': '550K', 'Ip 15 Pro': '550K', 'Ip 15 Pro Max': '550K',
    },
    'Flex Charger': {
        'Ip 6': '130K', 'Ip 6+': '130K', 'Ip 6s': '150K', 'Ip 6s+': '150K',
        'Ip 7': '200K', 'Ip 7+': '200K', 'Ip 8': '250K', 'Ip 8+': '250K',
        'Ip X': '250K', 'Ip XS': '250K', 'Ip XS Max': '250K', 'Ip XR': '250K', 'Ip SE 2': '250K',
        'Ip 11': '350K', 'Ip 11 Pro': '850K', 'Ip 11 Pro Max': '850K',
        'Ip 12': '450K', 'Ip 12 Pro': '450K', 'Ip 12 Pro Max': '500K', 'Ip 12 Mini': '500K',
        'Ip 13': '500K', 'Ip 13 Pro': '500K', 'Ip 13 Pro Max': '550K', 'Ip 13 Mini': '550K',
        'Ip 14': '500K', 'Ip 14 Plus': '500K', 'Ip 14 Pro': '550K', 'Ip 14 Pro Max': '550K',
        'Ip 15': '600K', 'Ip 15 Plus': '600K', 'Ip 15 Pro': '650K', 'Ip 15 Pro Max': '650K',
    },
}

const IPHONE_MESIN = [
    {
        nama: 'IC Power / Wifi / Baseband',
        note: '*Start from, sudah termasuk jasa & garansi mesin 3 bulan',
        data: [
            { seri: 'Ip 6/6s/6+/6s+', harga: '350K' },
            { seri: 'Ip 7/7+', harga: '400K' },
            { seri: 'Ip 8/8+', harga: '450K' },
            { seri: 'Ip X/XS/XS Max/XR', harga: '500K' },
            { seri: 'Ip 11/11 Pro/11 Pro Max', harga: '650K' },
            { seri: 'Ip 12/12 Pro/12 Pro Max', harga: '850K' },
            { seri: 'Ip 13/13 Pro/13 Pro Max/13 Mini', harga: '1.200K' },
            { seri: 'Ip 14/14 Pro/14 Pro Max/14 Plus', harga: '1.800K' },
            { seri: 'Ip 15/15 Pro/15 Pro Max/15 Plus', harga: '2.200K' },
            { seri: 'Ip 16/16 Pro/16 Pro Max', harga: '3.000K' },
        ],
    },
    {
        nama: 'IC Charger / Audio / Display / Touchscreen / Camera',
        note: '*Start from, sudah termasuk jasa & garansi mesin 3 bulan',
        data: [
            { seri: 'Ip 6/6s/6+/6s+', harga: '300K' },
            { seri: 'Ip 7/7+', harga: '350K' },
            { seri: 'Ip 8/8+', harga: '400K' },
            { seri: 'Ip X/XS/XS Max/XR', harga: '500K' },
            { seri: 'Ip 11/11 Pro/11 Pro Max', harga: '650K' },
            { seri: 'Ip 12/12 Pro/12 Pro Max', harga: '850K' },
            { seri: 'Ip 13/13 Pro/13 Pro Max/13 Mini', harga: '1.200K' },
            { seri: 'Ip 14/14 Pro/14 Pro Max/14 Plus', harga: '1.800K' },
            { seri: 'Ip 15/15 Pro/15 Pro Max/15 Plus', harga: '2.000K' },
            { seri: 'Ip 16/16 Pro/16 Pro Max', harga: '3.000K' },
        ],
    },
    {
        nama: 'Swapboard',
        note: null,
        data: [
            { seri: 'Ip X/XS/XS Max/XR', harga: '900K - 1.200K' },
            { seri: 'Ip 11/11 Pro/11 Pro Max', harga: '900K - 1.500K' },
            { seri: 'Ip 12/12 Pro/12 Pro Max', harga: '1.200K - 1.800K' },
            { seri: 'Ip 13/13 Pro/13 Pro Max/13 Mini', harga: '1.700K - 2.200K' },
            { seri: 'Ip 14/14 Pro/14 Pro Max/14 Plus', harga: '2.300K - 2.800K' },
            { seri: 'Ip 15/15 Pro/15 Pro Max/15 Plus', harga: '3.000K - 3.500K' },
        ],
    },
    {
        nama: 'IC Nandflash',
        note: null,
        isNandflash: true,
        data: [
            { seri: 'Ip X/XS/XS Max', storage: [{ gb: '64GB', harga: '800K' }, { gb: '256GB', harga: '1.100K' }, { gb: '512GB', harga: '1.300K' }] },
            { seri: 'Ip XR', storage: [{ gb: '64GB', harga: '800K' }, { gb: '128GB', harga: '1.100K' }, { gb: '256GB', harga: '1.250K' }] },
            { seri: 'Ip 11', storage: [{ gb: '64GB', harga: '1.200K' }, { gb: '128GB', harga: '1.400K' }, { gb: '256GB', harga: '1.600K' }] },
            { seri: 'Ip 11 Pro/11 Pro Max', storage: [{ gb: '64GB', harga: '1.200K' }, { gb: '256GB', harga: '1.500K' }, { gb: '512GB', harga: '1.800K' }] },
            { seri: 'Ip 12/12 Pro/12 Pro Max/12 Mini', storage: [{ gb: '64GB', harga: '1.200K' }, { gb: '128GB', harga: '1.400K' }, { gb: '256GB', harga: '1.700K' }, { gb: '512GB', harga: '1.900K' }] },
            { seri: 'Ip 13/13 Pro/13 Pro Max/13 Mini', storage: [{ gb: '128GB', harga: '1.750K' }, { gb: '256GB', harga: '2.000K' }, { gb: '512GB', harga: '2.400K' }] },
            { seri: 'Ip 14/14 Pro/14 Pro Max/14 Plus', storage: [{ gb: '128GB', harga: '1.900K' }, { gb: '256GB', harga: '2.300K' }, { gb: '512GB', harga: '2.700K' }] },
            { seri: 'Ip 15/15 Pro/15 Pro Max/15 Plus', storage: [{ gb: '128GB', harga: '2.400K' }, { gb: '256GB', harga: '2.800K' }, { gb: '512GB', harga: '3.400K' }] },
        ],
    },
]

const SERIES_GROUPS = [
    { label: 'Ip 6 Series', series: ['Ip 6', 'Ip 6+', 'Ip 6s', 'Ip 6s+'] },
    { label: 'Ip 7 Series', series: ['Ip 7', 'Ip 7+'] },
    { label: 'Ip 8 Series', series: ['Ip 8', 'Ip 8+'] },
    { label: 'Ip X Series', series: ['Ip X', 'Ip XS', 'Ip XS Max', 'Ip XR', 'Ip SE 2'] },
    { label: 'Ip 11 Series', series: ['Ip 11', 'Ip 11 Pro', 'Ip 11 Pro Max'] },
    { label: 'Ip 12 Series', series: ['Ip 12', 'Ip 12 Pro', 'Ip 12 Pro Max', 'Ip 12 Mini'] },
    { label: 'Ip 13 Series', series: ['Ip 13', 'Ip 13 Pro', 'Ip 13 Pro Max', 'Ip 13 Mini'] },
    { label: 'Ip 14 Series', series: ['Ip 14', 'Ip 14 Plus', 'Ip 14 Pro', 'Ip 14 Pro Max'] },
    { label: 'Ip 15 Series', series: ['Ip 15', 'Ip 15 Plus', 'Ip 15 Pro', 'Ip 15 Pro Max'] },
]

const PART_TABS = Object.keys(IPHONE_PARTS)

// ── MACBOOK DATA ──────────────────────────────────────────────

const MACBOOK_MODELS = [
    {
        model: 'MacBook Pro 13" (2008-2012) A1278',
        parts: [
            { nama: 'LCD Panel', harga: '2.700K' },
            { nama: 'Baterai', harga: 'Hubungi Kami' },
            { nama: 'Keyboard', harga: '500K' },
            { nama: 'Trackpad', harga: '550K' },
            { nama: 'Speaker', harga: '450K' },
            { nama: 'Flex', harga: 'Hubungi Kami' },
        ],
    },
    {
        model: 'MacBook Pro 15" (2009-2012) A1286',
        parts: [
            { nama: 'LCD Panel', harga: '3.100K' },
            { nama: 'Baterai', harga: 'Hubungi Kami' },
            { nama: 'Keyboard', harga: '500K' },
            { nama: 'Trackpad', harga: '550K' },
            { nama: 'Speaker', harga: '700K' },
        ],
    },
    {
        model: 'MacBook Pro 15" (2012-2015) A1398',
        parts: [
            { nama: 'LCD', harga: 'Hubungi Kami' },
            { nama: 'Baterai', harga: 'Hubungi Kami' },
            { nama: 'Keyboard', harga: 'Hubungi Kami' },
            { nama: 'Speaker', harga: 'Hubungi Kami' },
            { nama: 'Konektor Charger', harga: 'Hubungi Kami' },
            { nama: 'Fan', harga: 'Hubungi Kami' },
        ],
    },
    {
        model: 'MacBook Air 11" (2013-2015) A1495/A1465/A1370',
        parts: [
            { nama: 'LCD Fullset', harga: '3.100K' },
            { nama: 'LCD Panel Only', harga: '2.500K' },
            { nama: 'Baterai', harga: '850K' },
            { nama: 'Keyboard', harga: '780K' },
            { nama: 'Trackpad', harga: '500K' },
            { nama: 'Speaker', harga: 'Hubungi Kami' },
            { nama: 'Fan', harga: 'Hubungi Kami' },
        ],
    },
    {
        model: 'MacBook Pro 13" (2013-2015) A1502/A1425',
        parts: [
            { nama: 'LCD', harga: '3.800K' },
            { nama: 'Baterai', harga: '1.000K' },
            { nama: 'Keyboard', harga: '750K' },
            { nama: 'Trackpad', harga: '650K' },
            { nama: 'Speaker', harga: 'Hubungi Kami' },
            { nama: 'Konektor Charger', harga: 'Hubungi Kami' },
        ],
    },
    {
        model: 'MacBook Air 13" (2015-2017) A1466/A1369',
        parts: [
            { nama: 'LCD', harga: '3.500K' },
            { nama: 'Baterai', harga: 'Hubungi Kami' },
            { nama: 'Keyboard', harga: 'Hubungi Kami' },
            { nama: 'Trackpad', harga: 'Hubungi Kami' },
            { nama: 'Speaker', harga: 'Hubungi Kami' },
            { nama: 'Fan', harga: 'Hubungi Kami' },
        ],
    },
    {
        model: 'MacBook Pro 13" (2016-2017) A1708/A1989/A1706',
        parts: [
            { nama: 'LCD Panel Only', harga: '3.500K' },
            { nama: 'LCD Fullset', harga: '4.300K' },
            { nama: 'Baterai', harga: '1.200K' },
            { nama: 'Keyboard', harga: '900K' },
            { nama: 'Trackpad', harga: '850K' },
        ],
    },
    {
        model: 'MacBook Pro 13" Touchbar (2016-2019) A1989/A1706/A1708',
        parts: [
            { nama: 'LCD Panel Only', harga: '3.500K' },
            { nama: 'LCD Fullset', harga: '4.300K' },
            { nama: 'Baterai', harga: '1.200K' },
            { nama: 'Keyboard', harga: '900K' },
        ],
    },
    {
        model: 'MacBook Pro 15" (2017) A1707',
        parts: [
            { nama: 'LCD Panel Only', harga: '8.000K' },
            { nama: 'LCD Fullset', harga: '9.500K' },
            { nama: 'Baterai', harga: '1.400K' },
        ],
    },
    {
        model: 'MacBook Pro 15" Touch Bar (2018-2019) A1990/A1953',
        parts: [
            { nama: 'LCD', harga: '8.000K' },
            { nama: 'Baterai', harga: 'Hubungi Kami' },
        ],
    },
    {
        model: 'MacBook Pro 13" (2020) A2289',
        parts: [
            { nama: 'LCD Panel Only', harga: '3.800K' },
            { nama: 'LCD Fullset', harga: '4.700K' },
            { nama: 'Baterai', harga: '1.200K' },
        ],
    },
    {
        model: 'MacBook Air 13" (2018-2020) A1932/A1965',
        parts: [
            { nama: 'LCD Fullset', harga: '4.600K' },
            { nama: 'Baterai', harga: '1.200K' },
        ],
    },
    {
        model: 'MacBook Air 13" (2020) A2179',
        parts: [
            { nama: 'LCD', harga: '4.600K' },
            { nama: 'Baterai', harga: '1.400K' },
        ],
    },
    {
        model: 'MacBook Pro 13" (2019) A2159/A2251',
        parts: [
            { nama: 'LCD Panel Only', harga: '3.800K' },
            { nama: 'LCD Fullset', harga: '4.500K' },
            { nama: 'Baterai', harga: '1.400K' },
        ],
    },
    {
        model: 'MacBook Pro 16" (2019-2020) A2141',
        parts: [
            { nama: 'LCD', harga: 'Hubungi Kami' },
            { nama: 'Baterai', harga: 'Hubungi Kami' },
        ],
    },
    {
        model: 'MacBook Air 13" M1 (2020) A2337',
        parts: [
            { nama: 'LCD Panel Only', harga: '4.300K' },
            { nama: 'LCD Fullset', harga: '5.400K' },
            { nama: 'Baterai', harga: '1.400K' },
        ],
    },
    {
        model: 'MacBook Pro 13" M1-M2 (2020-2021) A2338',
        parts: [
            { nama: 'LCD Panel Only', harga: '4.400K' },
            { nama: 'LCD Fullset', harga: '5.500K' },
            { nama: 'Baterai', harga: '1.400K' },
        ],
    },
    {
        model: 'MacBook Air 13" M2 (2022) A2681',
        parts: [
            { nama: 'LCD Panel Only', harga: '5.000K' },
            { nama: 'LCD Fullset', harga: '6.500K' },
            { nama: 'Baterai', harga: '1.500K' },
        ],
    },
    {
        model: 'MacBook Pro 14" M1 Pro/Max (2022) A2442',
        parts: [
            { nama: 'LCD Panel Only', harga: '8.500K' },
            { nama: 'Baterai', harga: '1.750K' },
        ],
    },
    {
        model: 'MacBook Pro 16" M2 Max (2023) A2780',
        parts: [
            { nama: 'LCD Panel Only', harga: '9.000K' },
            { nama: 'LCD Fullset', harga: '12.500K' },
            { nama: 'Baterai', harga: '2.000K' },
        ],
    },
    {
        model: 'MacBook Air 15" M2 (2023) A2941',
        parts: [
            { nama: 'LCD Panel Only', harga: '5.500K' },
            { nama: 'LCD Fullset', harga: '8.500K' },
            { nama: 'Baterai', harga: '2.000K' },
        ],
    },
    {
        model: 'MacBook Pro 16" M2 Pro (2023) A2779',
        parts: [
            { nama: 'LCD Panel Only', harga: '9.000K' },
            { nama: 'Baterai', harga: 'Hubungi Kami' },
        ],
    },
    {
        model: 'MacBook Air 15" M3 (2023) A3114',
        parts: [
            { nama: 'LCD Panel Only', harga: '6.000K' },
            { nama: 'LCD Fullset', harga: '8.000K' },
            { nama: 'Baterai', harga: '2.200K' },
        ],
    },
    {
        model: 'MacBook Air 13" M3 (2023) A3113',
        parts: [
            { nama: 'LCD Panel Only', harga: '4.800K' },
            { nama: 'LCD Fullset', harga: '6.800K' },
            { nama: 'Baterai', harga: '1.500K' },
        ],
    },
    {
        model: 'MacBook Pro 14" M3 (2023) A2992',
        parts: [
            { nama: 'LCD Panel Only', harga: '8.500K' },
            { nama: 'LCD Fullset', harga: '10.500K' },
            { nama: 'Baterai', harga: 'Hubungi Kami' },
        ],
    },
    {
        model: 'MacBook Air 14" M3 (2023) A2918',
        parts: [
            { nama: 'LCD Panel Only', harga: '8.500K' },
            { nama: 'LCD Fullset', harga: '10.000K' },
            { nama: 'Baterai', harga: 'Hubungi Kami' },
        ],
    },
    {
        model: 'MacBook Pro 16" M4 (2024) A3186',
        parts: [
            { nama: 'LCD Panel Only', harga: '8.500K' },
            { nama: 'LCD Fullset', harga: '13.500K' },
            { nama: 'Baterai', harga: 'Hubungi Kami' },
        ],
    },
    {
        model: 'MacBook Air 13" M4 (2024) A3240',
        parts: [
            { nama: 'LCD Panel Only', harga: '6.500K' },
            { nama: 'LCD Fullset', harga: '8.000K' },
            { nama: 'Baterai', harga: 'Hubungi Kami' },
        ],
    },
]

// ── OTHER DEVICES ─────────────────────────────────────────────

const OTHER_DEVICES = [
    {
        id: 'ipad',
        icon: 'bx bx-tab',
        label: 'iPad',
        services: [
            { nama: 'Ganti Layar', harga: 'Hubungi Kami' },
            { nama: 'Ganti Baterai', harga: 'Hubungi Kami' },
            { nama: 'Ganti Tombol Home', harga: 'Hubungi Kami' },
            { nama: 'Ganti Charging Port', harga: 'Hubungi Kami' },
        ],
    },
    {
        id: 'applewatch',
        icon: 'bx bx-time-five',
        label: 'Apple Watch',
        services: [
            { nama: 'Ganti Layar', harga: 'Hubungi Kami' },
            { nama: 'Ganti Baterai', harga: 'Hubungi Kami' },
            { nama: 'Repair Sensor', harga: 'Hubungi Kami' },
            { nama: 'Ganti Crown', harga: 'Hubungi Kami' },
        ],
    },
]

// ── COMPONENT ─────────────────────────────────────────────────

export default function Services({ openModal }) {
    const [activeDevice, setActiveDevice] = useState('iphone')
    const [activeGroup, setActiveGroup] = useState(0)
    const [activePart, setActivePart] = useState('LCD')
    const [activeTab, setActiveTab] = useState('part')
    const [activeMesin, setActiveMesin] = useState(IPHONE_MESIN[0].nama)
    const [activeMacbook, setActiveMacbook] = useState(0)
    const [macSearch, setMacSearch] = useState('')

    const currentGroup = SERIES_GROUPS[activeGroup]
    const currentSeries = currentGroup.series
    const currentPart = IPHONE_PARTS[activePart]
    const currentMesin = IPHONE_MESIN.find(m => m.nama === activeMesin)

    const filteredMacbooks = MACBOOK_MODELS.filter(m =>
        m.model.toLowerCase().includes(macSearch.toLowerCase())
    )

    return (
        <section className="bg-gray-50 py-16 md:py-24" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">

                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-green-800 font-semibold text-sm uppercase tracking-widest mb-3">Layanan & Harga</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Solusi Lengkap <span className="text-green-800">Perangkat Apple</span>
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                        Transparan, terpercaya, dan bergaransi. Semua layanan dikerjakan oleh teknisi bersertifikat BNSP.
                    </p>
                </div>

                {/* Device Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {[
                        { id: 'iphone', icon: 'bx bx-mobile-alt', label: 'iPhone' },
                        { id: 'macbook', icon: 'bx bx-laptop', label: 'MacBook' },
                        { id: 'ipad', icon: 'bx bx-tab', label: 'iPad' },
                        { id: 'applewatch', icon: 'bx bx-time-five', label: 'Apple Watch' },
                    ].map(d => (
                        <button
                            key={d.id}
                            onClick={() => setActiveDevice(d.id)}
                            aria-label='Fitur Device Tab'
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${activeDevice === d.id
                                    ? 'bg-green-800 text-white shadow-lg'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:border-green-400'
                                }`}
                        >
                            <i className={`${d.icon} text-lg`}></i>
                            {d.label}
                        </button>
                    ))}
                </div>

                {/* ── iPhone Panel ── */}
                {activeDevice === 'iphone' && (
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="bg-gradient-to-r from-green-700 to-emerald-600 px-6 py-5 flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                <i className="bx bx-mobile-alt text-2xl text-white"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">iPhone Repair</h3>
                                <p className="text-green-100 text-sm mt-0.5">Ganti part & servis mesin per seri</p>
                            </div>
                        </div>

                        <div className="flex border-b border-gray-100">
                            <button onClick={() => setActiveTab('part')}
                                aria-label='Fitur active section'
                                className={`flex-1 py-3 text-sm font-bold transition-all ${activeTab === 'part' ? 'text-green-800 border-b-2 border-green-700 bg-green-50' : 'text-gray-500 hover:text-gray-700'}`}>
                                🔧 Ganti Part
                            </button>
                            <button onClick={() => setActiveTab('mesin')}
                                aria-label='Fitur active section'
                                className={`flex-1 py-3 text-sm font-bold transition-all ${activeTab === 'mesin' ? 'text-green-800 border-b-2 border-green-700 bg-green-50' : 'text-gray-500 hover:text-gray-700'}`}>
                                ⚙️ Servis Mesin / IC
                            </button>
                        </div>

                        {activeTab === 'part' && (
                            <div className="p-6">
                                <div className="mb-5">
                                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Pilih Seri</p>
                                    <div className="flex flex-wrap gap-2">
                                        {SERIES_GROUPS.map((g, i) => (
                                            <button key={g.label} onClick={() => setActiveGroup(i)}
                                                aria-label='Fitur active section'
                                                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeGroup === i ? 'bg-green-800 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                                                {g.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Pilih Part</p>
                                    <div className="flex flex-wrap gap-2">
                                        {PART_TABS.map(p => (
                                            <button key={p} onClick={() => setActivePart(p)}
                                                aria-label='Fitur active section'
                                                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activePart === p ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                                                {p}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="divide-y divide-gray-50 rounded-xl overflow-hidden border border-gray-100">
                                    <div className="grid grid-cols-2 bg-green-800 text-white text-xs font-bold px-4 py-2.5 uppercase tracking-wider">
                                        <span>Seri</span><span className="text-right">Harga</span>
                                    </div>
                                    {currentSeries.map(seri => {
                                        const harga = currentPart[seri] || '-'
                                        const unavailable = harga === '-'
                                        return (
                                            <div key={seri} className={`grid grid-cols-2 items-center px-4 py-3 transition-colors ${unavailable ? 'bg-gray-50' : 'hover:bg-green-50'}`}>
                                                <span className={`text-sm font-medium ${unavailable ? 'text-gray-400' : 'text-gray-700'}`}>{seri}</span>
                                                <span className={`text-right text-sm font-bold ${unavailable ? 'text-gray-300' : 'text-green-700'}`}>
                                                    {unavailable ? 'Tidak tersedia' : `Rp ${harga}`}
                                                </span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="text-xs text-gray-400 mt-3">* Harga dapat berubah tergantung kondisi device. Diagnosa gratis sebelum pengerjaan.</p>
                            </div>
                        )}

                        {activeTab === 'mesin' && (
                            <div className="p-6">
                                <div className="mb-5">
                                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Pilih Jenis Servis</p>
                                    <div className="flex flex-wrap gap-2">
                                        {IPHONE_MESIN.map(m => (
                                            <button key={m.nama} onClick={() => setActiveMesin(m.nama)}
                                                aria-label='Fitur active section'
                                                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeMesin === m.nama ? 'bg-green-800 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                                                {m.nama.length > 30 ? m.nama.substring(0, 28) + '...' : m.nama}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <h4 className="font-bold text-gray-800 mb-4 text-sm">{currentMesin.nama}</h4>
                                {currentMesin.isNandflash ? (
                                    <div className="space-y-3">
                                        {currentMesin.data.map(row => (
                                            <div key={row.seri} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                                                <p className="font-bold text-gray-800 text-sm mb-3">{row.seri}</p>
                                                <div className="space-y-1.5">
                                                    {row.storage.map(s => (
                                                        <div key={s.gb} className="flex justify-between items-center">
                                                            <span className="text-xs text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">{s.gb}</span>
                                                            <span className="text-sm font-bold text-green-700">Rp {s.harga}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="divide-y divide-gray-50 rounded-xl overflow-hidden border border-gray-100">
                                        <div className="grid grid-cols-2 bg-green-800 text-white text-xs font-bold px-4 py-2.5 uppercase tracking-wider">
                                            <span>Seri</span><span className="text-right">Harga</span>
                                        </div>
                                        {currentMesin.data.map(row => (
                                            <div key={row.seri} className="grid grid-cols-2 items-center px-4 py-3 hover:bg-green-50 transition-colors">
                                                <span className="text-sm font-medium text-gray-700">{row.seri}</span>
                                                <span className="text-right text-sm font-bold text-green-700">Rp {row.harga}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {currentMesin.note && <p className="text-xs text-gray-400 mt-3 italic">{currentMesin.note}</p>}
                            </div>
                        )}

                        <div className="px-6 pb-6">
                            <button onClick={() => openModal('iPhone Repair')}
                                aria-label='Modal WhatsApp Pop Up Mustika'
                                className="flex items-center justify-center gap-2 w-full bg-green-800 hover:bg-green-900 text-white font-semibold py-3 rounded-xl transition-all">
                                <i className="bx bx-chat text-xl"></i>
                                Konsultasi Gratis via WhatsApp
                            </button>
                        </div>
                    </div>
                )}

                {/* ── MacBook Panel ── */}
                {activeDevice === 'macbook' && (
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="bg-gradient-to-r from-green-700 to-emerald-600 px-6 py-5 flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                <i className="bx bx-laptop text-2xl text-white"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">MacBook Service</h3>
                                <p className="text-green-100 text-sm mt-0.5">Pilih model MacBook kamu</p>
                            </div>
                        </div>

                        <div className="p-6">
                            {/* Search */}
                            <div className="relative mb-5">
                                <i className="bx bx-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl"></i>
                                <input
                                    type="text"
                                    placeholder="Cari model MacBook..."
                                    value={macSearch}
                                    onChange={e => setMacSearch(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-sm"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                {/* Model list */}
                                <div className="space-y-1.5 max-h-96 overflow-y-auto pr-1">
                                    {filteredMacbooks.map((m, i) => (
                                        <button
                                            key={m.model}
                                            onClick={() => setActiveMacbook(MACBOOK_MODELS.indexOf(m))}
                                            aria-label='Modal WhatsApp Pop Up Mustika'
                                            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeMacbook === MACBOOK_MODELS.indexOf(m)
                                                    ? 'bg-green-800 text-white'
                                                    : 'bg-gray-50 text-gray-700 hover:bg-green-50'
                                                }`}
                                        >
                                            {m.model}
                                        </button>
                                    ))}
                                    {filteredMacbooks.length === 0 && (
                                        <p className="text-center text-gray-400 text-sm py-8">Model tidak ditemukan</p>
                                    )}
                                </div>

                                {/* Parts detail */}
                                <div>
                                    <h4 className="font-bold text-gray-800 text-sm mb-3">{MACBOOK_MODELS[activeMacbook].model}</h4>
                                    <div className="divide-y divide-gray-50 rounded-xl overflow-hidden border border-gray-100">
                                        <div className="grid grid-cols-2 bg-green-800 text-white text-xs font-bold px-4 py-2.5 uppercase tracking-wider">
                                            <span>Part</span><span className="text-right">Harga</span>
                                        </div>
                                        {MACBOOK_MODELS[activeMacbook].parts.map(p => (
                                            <div key={p.nama} className="grid grid-cols-2 items-center px-4 py-3 hover:bg-green-50 transition-colors">
                                                <span className="text-sm font-medium text-gray-700">{p.nama}</span>
                                                <span className={`text-right text-sm font-bold ${p.harga === 'Hubungi Kami' ? 'text-green-700' : 'text-gray-800'}`}>
                                                    {p.harga === 'Hubungi Kami' ? p.harga : `Rp ${p.harga}`}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-xs text-gray-400 mt-3">* Harga belum termasuk ongkos jasa. Konsultasi gratis sebelum pengerjaan.</p>
                                </div>
                            </div>
                        </div>

                        <div className="px-6 pb-6">
                            <button onClick={() => openModal('MacBook Service')}
                                aria-label='Modal WhatsApp Pop Up Mustika'
                                className="flex items-center justify-center gap-2 w-full bg-green-800 hover:bg-green-900 text-white font-semibold py-3 rounded-xl transition-all">
                                <i className="bx bx-chat text-xl"></i>
                                Konsultasi Gratis via WhatsApp
                            </button>
                        </div>
                    </div>
                )}

                {/* ── iPad & Apple Watch Panel ── */}
                {(activeDevice === 'ipad' || activeDevice === 'applewatch') && (() => {
                    const device = OTHER_DEVICES.find(d => d.id === activeDevice)
                    return (
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden max-w-2xl mx-auto">
                            <div className="bg-gradient-to-r from-green-700 to-emerald-600 px-6 py-5 flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                    <i className={`${device.icon} text-2xl text-white`}></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{device.label} Service</h3>
                                    <p className="text-green-100 text-sm mt-0.5">Hubungi kami untuk harga terbaik</p>
                                </div>
                            </div>
                            <div className="divide-y divide-gray-50">
                                {device.services.map(s => (
                                    <div key={s.nama} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <i className="bx bx-check-circle text-green-500 text-xl"></i>
                                            <span className="text-gray-700 font-medium text-sm">{s.nama}</span>
                                        </div>
                                        <span className="text-green-700 font-bold text-sm">{s.harga}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="p-6">
                                <p className="text-xs text-gray-400 mb-4">* Harga tergantung kondisi device. Konsultasi gratis sebelum pengerjaan.</p>
                                <button onClick={() => openModal(device.label + ' Service')}
                                    aria-label='Modal WhatsApp Pop Up Mustika'
                                    className="flex items-center justify-center gap-2 w-full bg-green-800 hover:bg-green-900 text-white font-semibold py-3 rounded-xl transition-all">
                                    <i className="bx bx-chat text-xl"></i>
                                    Konsultasi Gratis via WhatsApp
                                </button>
                            </div>
                        </div>
                    )
                })()}

            </div>
        </section>
    )
}